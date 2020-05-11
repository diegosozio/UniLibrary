import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { HomeComponent } from '../authentication/home/home.component';
import { LogInComponent } from '../authentication/log-in/log-in.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ArchiveComponent } from '../archive/archive.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'log-in', component: LogInComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: ArchiveComponent },

    // otherwise redirect to home 
    { path: '**', redirectTo: '' }
];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


