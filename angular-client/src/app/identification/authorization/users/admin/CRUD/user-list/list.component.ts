import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AdminService } from '../../admin.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private adminService: AdminService) {}

    ngOnInit() {
        this.adminService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    /* deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.adminService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    } */
}