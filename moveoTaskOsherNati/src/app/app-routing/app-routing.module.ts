import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [ //routing for the nav bar
  { path: 'employee', component: EmployeeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
