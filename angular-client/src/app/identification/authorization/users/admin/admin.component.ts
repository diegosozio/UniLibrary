import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { AdminService } from './admin.service';
import { first } from 'rxjs/internal/operators/first';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    isDeleting = false;
    users:  User[] = [];

    constructor(
        private adminService: AdminService,
        ) { }

    ngOnInit() {
        this.loading = true;
        this.adminService.getAll().pipe(first()).subscribe(usrs => {
            this.loading = false;
            this.users = usrs;
        }); 
    }

    deleteUser(username: string) {
        const user = this.users.find(x => x.username === username);
        this.isDeleting = true;
        this.adminService.delete(username)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.username !== username) 
            }); 
    }
}