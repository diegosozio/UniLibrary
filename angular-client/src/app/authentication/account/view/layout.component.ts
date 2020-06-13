import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';

@Component({ 
    templateUrl: 'layout.component.html',
    styleUrls: ['../assets/stylesheet/login-register.component.scss']

})
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}