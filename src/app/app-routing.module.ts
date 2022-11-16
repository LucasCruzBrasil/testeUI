import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'dashboard', canActivate: [AuthGuardService], component:DashboardComponent, loadChildren:() => import('./admin/admin.module').then((m) => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
