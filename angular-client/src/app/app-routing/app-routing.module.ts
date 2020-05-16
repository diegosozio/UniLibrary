import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'


import { HomeComponent } from '../authentication/home';
import { AuthGuard } from '../authentication/utils/auth.guard';

import { WelcomeComponent } from '../welcome/welcome.component';
import { ArchiveComponent } from '../archive/archive.component';
import { NotFoundComponent} from '../not-found/not-found.component';

const accountModule = () => import('../authentication/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('../authentication/user/users.module').then(x => x.UsersModule);
 
const routes: Routes = [  
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent  },
  { path: 'gallery', component: ArchiveComponent },
  { path: 'notfound', component: NotFoundComponent  },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },

  /* Afer refactoring */
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },

];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


