import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CalendarDetailComponent } from './components/calendar-detail/calendar-detail.component';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';

const routes: Routes = [
    { path: 'library', component: CalendarPageComponent },
    { path: 'calendar/:id', component: CalendarDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class CalendarRoutingModule { }
