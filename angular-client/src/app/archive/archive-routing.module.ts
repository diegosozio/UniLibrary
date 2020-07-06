import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ArchiveComponent } from './archive.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
    {
        path: '', component: ArchiveComponent
    },
   { path: 'add', component:  AddBookComponent}
   ,
   { path: 'edit/:id', component:  EditBookComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArchiveRoutingModule { }