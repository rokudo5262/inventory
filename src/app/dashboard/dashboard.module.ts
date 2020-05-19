import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbButtonModule,
  NbSelectModule,
  NbRadioModule,
  NbInputModule,
  NbDialogModule,
} from '@nebular/theme';

import { ThemeModule } from '@app/@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RoomGroupModule } from '../roomgroup/roomgroup.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GoodsGroupModule } from '@app/goods-group/goods-group.module';
import { LocationsModule } from '@app/locations/locations.module';
import { WarehouseModule } from '@app/warehouse';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { UomsModule } from '@app/UOMs';
import { CodeMasterModule } from '@app/code-master/code-master.module';
import { SalesTeamModule } from '@app/salesteam/salesteam.module';
import { ProductGroupModule } from '@app/product-group';
import { ApplyForModule } from '@appapplyfor';
import { EmployeeModule } from '@app/employee/employee.module';
import { CalendarModule } from '@app/calendars/calendar.module';
import { OrdersModule } from '@app/orders/orders.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    RoomGroupModule,
    SalesTeamModule,
    EmployeeModule,
    ThemeModule,
    NbSelectModule,
    NbInputModule,
    NbRadioModule,
    NbMenuModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbDialogModule,
    GoodsGroupModule,
    LocationsModule,
    WarehouseModule,
    LocationsModule,
    StoreModule,
    LocationsModule,
    UomsModule,
    CalendarModule,
    ApplyForModule,
    CodeMasterModule,
    ProductGroupModule,
    OrdersModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}

