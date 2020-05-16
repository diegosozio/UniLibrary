/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ArchiveModule } from './archive/archive.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './authentication/home/home.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ArchiveComponent } from './archive/archive.component';
import { BooksComponent } from './archive/books/books.component';
import { BookComponent } from './archive/books/book/book.component';
import { FilterComponent } from './archive/filter/filter.component';

*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './authentication/utils/fake-backend';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JwtInterceptor } from './authentication/utils/jwt.interceptior';
import { ErrorInterceptor } from './authentication/utils/error.iterceptior';
import { AppComponent } from './app.component';
import { AlertComponent } from './authentication/alerts/alert.component';
import { HomeComponent } from './authentication/home/home.component';
import { AccountService } from './authentication/account/account.service';
import { RouterModule } from '@angular/router';

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
   /* LogInComponent,
    RegisterComponent,
    ArchiveComponent,
    FilterComponent,
    BooksComponent,
    BookComponent*/
  ],
  bootstrap: [AppComponent],  
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true },
    { provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true }, 
      AccountService
    //fakeBackendProvider 
  ],
})
export class AppModule { };
