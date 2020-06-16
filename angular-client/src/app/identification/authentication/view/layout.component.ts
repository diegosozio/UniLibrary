import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({ 
    templateUrl: 'layout.component.html',
    styleUrls: ['../assets/stylesheet/login-register.component.scss']

})
export class LayoutComponent {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authService.userValue) {
            this.router.navigate(['/']);
        }
    }
}