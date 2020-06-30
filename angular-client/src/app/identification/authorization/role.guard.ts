import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({ providedIn: 'root'  })
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.userValue;
        if (currentUser) {
            /** check if route is restricted by role. Here we are going to check and control the roots */
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                /* role not authorised so redirect to home page */
                this.router.navigate(['/']);
                return false;
            }         

            /* authorised so return true */
            return true;
        }

        console.log("Logged user: "+ currentUser.username);


        /* not logged in so redirect to login page with the return url */
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}