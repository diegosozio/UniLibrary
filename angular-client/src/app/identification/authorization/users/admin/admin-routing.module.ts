import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AddEditComponent } from './CRUD/add-edit/add-edit.component';
import { LayoutComponent } from './CRUD/container/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: AdminComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:username', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }