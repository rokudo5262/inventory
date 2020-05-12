import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartnersComponent } from './partners.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


const routes: Routes = [
  {
    path: '',
    component: PartnersComponent,
    children: [
      {
        path: 'suppliers',
        component: SuppliersComponent,
      },
      {
        path: '',
        redirectTo: 'suppliers',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PartnersRoutingModule {
}

export const routedComponents = [
  SuppliersComponent,
  PartnersComponent,
];
