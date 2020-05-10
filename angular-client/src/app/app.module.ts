import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveModule } from './archive/archive.module';
import { FilterComponent } from './archive/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
