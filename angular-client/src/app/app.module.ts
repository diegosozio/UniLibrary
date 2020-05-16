import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { JwtInterceptor } from './authentication/utils/jwt.interceptior';
import { ErrorInterceptor } from './authentication/utils/error.iterceptior';
import { AppComponent } from './app.component';
import { AlertComponent } from './authentication/alerts/alert.component';
import { HomeComponent } from './authentication/home/home.component';
import { AccountService } from './authentication/account/account.service';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent, 
    AlertComponent, 
    HomeComponent
  /*ArchiveComponent,
    FilterComponent,
    BookComponent*/
  ],
  bootstrap: [AppComponent],  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,  multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi: true }, 
    AccountService
  ],
})
export class AppModule { };
