import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './view/user-layout.component';
//import { ListComponent } from './list.component';
//import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent,
        children: [
        //    { path: '', component: ListComponent },
          //  { path: 'add', component: AddEditComponent },
            //{ path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }