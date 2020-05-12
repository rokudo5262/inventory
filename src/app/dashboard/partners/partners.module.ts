import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbUserModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbTabsetModule,
  NbRouteTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PartnersRoutingModule, routedComponents } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { SuppliersComponent, CreateComponent, Tab2Component } from './suppliers/suppliers.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    PartnersRoutingModule,
    NbUserModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbTabsetModule,
    NbRouteTabsetModule,
  ],
  declarations: [
    ...routedComponents,
    PartnersComponent,
    SuppliersComponent,
    CreateComponent,
    Tab2Component,
  ],
})
export class PartnersModule { }
