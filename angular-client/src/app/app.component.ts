/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-client';
}

*//*
import { Component } from '@angular/core';

import { AccountService } from './authentication/_services';
import { User } from './authentication/_models';

@Component({ 
  selector: 'app', 
  templateUrl: 'app.component.html' 
})
export class AppComponent {
    user: User;
    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
} 

*/

import { Component } from '@angular/core';

import { AccountService } from './authentication/account/account.service';
import { User } from './authentication/user/user';

@Component({ 
  selector: 'app-root', 
  templateUrl: 'app.component.html' 
})
export class AppComponent {
    user: User;
    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}