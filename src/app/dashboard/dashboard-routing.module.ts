import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'goods-group',
      loadChildren: () => import('@app/goods-group/goods-group.module')
        .then(m => m.GoodsGroupModule),
    },
    {
      path: 'product-group',
      loadChildren: () => import('@app/product-group/product-group.module')
        .then(m => m.ProductGroupModule),
    },
    {
      path: 'customers',
      loadChildren: () => import('@app/customers/customers.module')
        .then(m => m.CustomersModule),
    },
    {
      path: 'UOMs',
      loadChildren: () => import('@app/UOMs/uoms.module')
        .then(m => m.UomsModule),
    },
    {
      path: 'calendars',
      loadChildren: () => import('@app/calendars/calendar.module')
        .then(m => m.CalendarModule),
    },
    {
      path: 'states',
      loadChildren: () => import('./states/states.module')
        .then(m => m.StatesModule),
    },
    {
      path: 'store-information',
      loadChildren: () => import('../store-information/store-information.module')
        .then(m => m.StoreInformationModule),
    },
    {
      path: 'roomgroups',
      loadChildren: () => import('../roomgroup/roomgroup.module')
        .then(m => m.RoomGroupModule),
    },
    {
      path: 'salesteams',
      loadChildren: () => import('../salesteam/salesteam.module')
        .then(m => m.SalesTeamModule),
    },
    {
      path: 'salesteambins',
      loadChildren: () => import('../salesteam/salesteam.module')
        .then(m => m.SalesTeamModule),
    },
    {
      path: 'employees',
      loadChildren: () => import('../employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'employeeresponsibilities',
      loadChildren: () => import('../employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'warehouse',
      loadChildren: () => import('@appwarehouse/warehouse.module')
        .then(m => m.WarehouseModule),
    },
    {
      path: 'locations',
      loadChildren: () => import('../locations/locations.module')
        .then(m => m.LocationsModule),
    },
    {
      path: 'codeMaster',
      loadChildren: () => import('@appcodeMaster/code-master.module')
        .then(m => m.CodeMasterModule),
    },
    {
      path: 'codeDetail',
      loadChildren: () => import('@appcodeMaster/code-master.module')
        .then(m => m.CodeMasterModule),
    },
    {
      path: 'applyfor',
      loadChildren: () => import('@appapplyfor/apply-for.module')
        .then(m => m.ApplyForModule),
    },
    {
      path: 'structure',
      loadChildren: () => import('../structure/structure.module')
        .then(m => m.StructureModule),
    },
    {
      path: 'se-customer',
      loadChildren: () => import('../se-customer/se-customer.module')
        .then(m => m.SecondaryCustomernModule),
    },
    {
      path: '',
      redirectTo: 'customers',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
