import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AddEditComponent } from './CRUD/add-edit/add-edit.component';
import { LayoutComponent } from './CRUD/container/layout.component';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,         
    ],
    declarations: [
        LayoutComponent,
        AdminComponent,
        AddEditComponent,
    ]
}) 
export class AdminModule { }