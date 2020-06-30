import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../admin.service';
import { AlertService } from '../../../../../authentication/alerts/alert.service';
import { first } from 'rxjs/operators';

@Component({ 
    templateUrl: 'add-edit.component.html',
})
export class AddEditComponent implements OnInit {
    form: FormGroup;
    username: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    roles: any = ['admin', 'reader', 'librarian']

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.username = this.route.snapshot.params['username'];
        this.isAddMode = !this.username;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', passwordValidators],
            role: ['', Validators.required]
        });

       if (!this.isAddMode) {
             this.adminService.getByUsername(this.username) 
                .pipe(first())
                .subscribe(x => {
                    this.f.name.setValue(x.name);
                    this.f.surname.setValue(x.surname);
                    this.f.username.setValue(x.username);
                    this.f.role.setValue((x.role));
                }); 
        } 

    }


    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        

        if (this.isAddMode) {
            this.createUser();
        } else {
            this.updateUser();
        } 
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    /* Dropdown menu error */
    handleError = (controlName: string, errorName: string) => {
        return this.f.role.hasError(errorName);
    }

    /* on select Dropdown menu */
    changeSuit(e) {
        this.f.role.get('role').setValue(e.target.value, {
          onlySelf: true
        })
      }
      
    
    createUser() {
       this.adminService.register(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('User added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['.', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    
    updateUser() {     
        this.adminService.update(this.username, this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['..', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }); 
    } 
}