import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule,
    NbDialogModule,
    NbTreeGridModule,
    NbThemeModule,
    NbListModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbSelectModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeePageComponent } from './containers/employee-page/employee-page.component';
import {
    reducer_employee,
    employeesFeatureKey,
    employeeresponsibilitiesFeatureKey,
    reducer_employeeresponsibility
} from './reducers';
import { EmployeeResponsibilityPageComponent } from './containers/employee-responsibility-page/employee-responsibility-page.component';
import { EmployeeEffect, EmployeeResponsibilityEffect } from './effects';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeResponsibilityListComponent } from './components/employee-responsibility-list/employee-responsibility-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeePreviewComponent } from './components/employee-preview/employee-preview.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeResponsibilityUpdateComponent } from './components/employee-responsibility-update/employee-responsibility-update.component';
import { EmployeeResponsibilityPreviewComponent } from './components/employee-responsibility-preview/employee-responsibiloty-preview.component';
import { EmployeeResponsibilityAddComponent } from './components/employee-responsibility-add/employee-responsibility-add.component';
import { EmployeeResponsibilityDetailComponent } from './components/employee-responsibility-detail/employee-responsibility-detail.component';
import { ResponsibilityListComponent } from './components/responsibility-list/responsibility-list.component';
import { ResponsibilityList2Component } from './components/responsibility-list-2/responsibility-list-2.component';


@NgModule({
    imports: [
        NbTreeGridModule,
        NbAuthModule,
        NbDialogModule.forChild(),
        NbThemeModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        NbWindowModule,
        NbListModule,
        NbSpinnerModule,
        NbTabsetModule,
        NbSelectModule,
        // -------------------------------------------------------------
        ReactiveFormsModule,
        FormsModule,
        ThemeModule,
        RouterModule,
        EmployeeRoutingModule,
        CommonModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        StoreModule.forFeature(employeesFeatureKey, reducer_employee),
        StoreModule.forFeature(employeeresponsibilitiesFeatureKey, reducer_employeeresponsibility),
        EffectsModule.forFeature([EmployeeEffect]),
        EffectsModule.forFeature([EmployeeResponsibilityEffect]),
        Ng2SmartTableModule,
    ],
    declarations: [
        EmployeeComponent,
        // -------------------------------------------------------------
        EmployeeListComponent,
        EmployeePageComponent,
        EmployeeAddComponent,
        EmployeeUpdateComponent,
        EmployeePreviewComponent,
        EmployeeDetailComponent,
        // -------------------------------------------------------------
        ResponsibilityListComponent,
        ResponsibilityList2Component,
        EmployeeResponsibilityListComponent,
        EmployeeResponsibilityPageComponent,
        EmployeeResponsibilityPreviewComponent,
        EmployeeResponsibilityUpdateComponent,
        EmployeeResponsibilityAddComponent,
        EmployeeResponsibilityDetailComponent,
    ],
    entryComponents: [
        // -------------------------------------------------------------
        EmployeeAddComponent,
        EmployeeUpdateComponent,
        // -------------------------------------------------------------
        EmployeeResponsibilityUpdateComponent,
        EmployeeResponsibilityAddComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class EmployeeModule {
}
