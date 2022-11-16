import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login/login.component';
import { DashboardListaComponent } from './dashboard-lista/dashboard-lista/dashboard-lista.component';
import { DashboradFormComponent } from './dashborad-form/dashborad-form.component';

const routes: Routes = [
  { path: '', component: DashboardListaComponent },
  { path: 'lista', component: DashboardListaComponent },
  { path: 'clientForm', component: DashboradFormComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
