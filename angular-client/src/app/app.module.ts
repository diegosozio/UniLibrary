import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { JwtInterceptor } from './identification/authentication/utils/jwt.interceptior';
import { ErrorInterceptor } from './identification/authentication/utils/error.iterceptior';
import { AppComponent } from './app.component';
import { AlertComponent } from './identification/authentication/alerts/alert.component';
import { HomeComponent } from './identification/authorization/home/home.component';
import { AuthenticationService } from './identification/authentication/authentication.service';
import { AdminComponent } from './identification/authorization/users/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ChatModule,
    SharedModule,
    MatMenuModule
  ],

  declarations: [
    AppComponent, 
    AlertComponent, 
    HomeComponent
    //AdminComponent
  /*ArchiveComponent,
    FilterComponent,
    BookComponent*/
  ],
  bootstrap: [AppComponent],  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,  multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi: true }, 
    AuthenticationService // To dbe deleted ?!
  ],
})
export class AppModule { };
