import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

//import { HomeComponent } from '../authentication/home/home.component'; 
/*
import { LogInComponent } from '../authentication/log-in/log-in.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ArchiveComponent } from '../archive/archive.component';
*/
import { HomeComponent } from '../authentication/home';
import { AuthGuard } from '../authentication/utils/auth.guard'; 


const accountModule = () => import('../authentication/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('../authentication/user/users.module').then(x => x.UsersModule);


const routes: Routes = [
  /*{ path: '', component: HomeComponent  },
  { path: 'log-in', component: LogInComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: ArchiveComponent },*/

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },

    // otherwise redirect to home 
    { path: '**', redirectTo: '' }
];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


