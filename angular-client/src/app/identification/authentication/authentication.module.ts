import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationRouting } from './authentication-routing';
import { LayoutComponent } from './view/layout.component';
import { LoginComponent } from './log-in/login.component';
import { RegisterComponent } from './registration/register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AuthenticationRouting
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthenticaionModule { } AuthenticationRouting