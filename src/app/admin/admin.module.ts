import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardListaComponent } from './dashboard/dashboard-lista/dashboard-lista/dashboard-lista.component';
import { DashboradFormComponent } from './dashboard/dashborad-form/dashborad-form.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardListaComponent,
    DashboradFormComponent,
  
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
