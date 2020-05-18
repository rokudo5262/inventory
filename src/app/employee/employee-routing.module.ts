import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeePageComponent } from './containers/employee-page/employee-page.component';
import { EmployeeResponsibilityPageComponent } from './containers/employee-responsibility-page/employee-responsibility-page.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeResponsibilityDetailComponent } from './components/employee-responsibility-detail/employee-responsibility-detail.component';
const routes: Routes = [{
  path: '',
  component: EmployeeComponent,
  children: [
    { path: 'library', component: EmployeePageComponent },
    { path: 'library', component: EmployeeResponsibilityPageComponent },
    { path: 'employee/:employeeCode', component: EmployeeDetailComponent },
    { path: 'employeeresponsibility/:lineId', component: EmployeeResponsibilityDetailComponent },
    { path: '', redirectTo: 'library', pathMatch: 'full' },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EmployeeRoutingModule {
}
