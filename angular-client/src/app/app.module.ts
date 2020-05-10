import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRoutingModule } from './archive/archive-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchiveRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
