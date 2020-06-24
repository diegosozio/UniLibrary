import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ArchiveRoutingModule } from './archive-routing.module';
import { AddBookComponent } from './add-book/add-book.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from './edit-book/edit-book.component';
@NgModule({
  declarations: [AddBookComponent, EditBookComponent],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class ArchiveModule { }
