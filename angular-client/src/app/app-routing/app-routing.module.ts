import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { WelcomeComponent } from '../welcome/welcome.component';
import { LogInComponent } from '../authentication/log-in/log-in.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ArchiveComponent } from '../archive/archive.component';

const routes: Routes = [  
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent  },
  { path: 'log-in', component: LogInComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: ArchiveComponent },

  {path: '**', redirectTo: '404'},
];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


