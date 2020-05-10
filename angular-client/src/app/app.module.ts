import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveModule } from './archive/archive.module';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
