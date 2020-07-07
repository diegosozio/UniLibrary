import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { HomeComponent } from '../identification/authorization/home';
import { RoleGuard } from '../identification/authorization/role.guard';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ArchiveComponent } from '../archive/archive.component';
import { NotFoundComponent} from '../not-found/not-found.component';
import { Role } from '../identification/model/role';
import { ChatComponent } from '../chat/chat.component';


const authenticationModule = () => import('../identification/authentication/authentication.module').then(x => x.AuthenticaionModule);
const adminModule = () => import('../identification/authorization/users/admin/admin.module').then(x => x.AdminModule);
const archiveModule = () => import('../archive/archive.module').then(x => x.ArchiveModule);


const routes: Routes = [  

  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
  { path: 'welcome', component: WelcomeComponent  },
  { path: 'gallery', loadChildren: archiveModule  },
  { path: 'notfound', component: NotFoundComponent  },

  { path: 'home', component: HomeComponent, canActivate: [RoleGuard] },
  { path: 'account', loadChildren: authenticationModule },
  { path: 'admin',   loadChildren: adminModule, canActivate: [RoleGuard], data: { roles: [Role.Admin] }, },

   {path: 'chat', component: ChatComponent},

  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 


