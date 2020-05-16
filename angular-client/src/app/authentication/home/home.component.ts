import { Component } from '@angular/core';

import { User } from '../user/user';
import { AccountService } from '../account/account.service';

@Component({ 
    templateUrl: 'home.component.html' 
})
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}