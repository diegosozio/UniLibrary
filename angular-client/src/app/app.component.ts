import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './identification/authentication/authentication.service';
import { User } from './identification/model/user';
import { Role } from './identification/model/role';

@Component({ 
  selector: 'app-root', 
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    user: User;
    constructor(
      private router: Router, // I added router
      private authService: AuthenticationService     
    ) {
        this.authService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
      return this.user && this.user.role === Role.Admin; // I added
    }

    get isLibrarian() {
      return this.user && this.user.role === Role.Librarian; // I added
    }

    get isReader() {
      return this.user && this.user.role === Role.Reader; // I added
    }


    logout() {
        this.authService.logout();
        this.router.navigate(['/account/login']); // I added
    }
}