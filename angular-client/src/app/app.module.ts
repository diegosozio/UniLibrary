import { AppComponent } from './app.component';

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
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    ArchiveComponent,
    FilterComponent,
    BooksComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchiveModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
