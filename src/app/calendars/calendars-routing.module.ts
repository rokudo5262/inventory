import { Routes, RouterModule } from '@angular/router';
import { CalendarViewComponent } from './containers/calendar-view/calendar-view.component';
import { NgModule } from '@angular/core';
import { CalendarDetailComponent } from './containers/calendar-detail/calendar-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CalendarViewComponent,
    },
    {
        path: 'calendar/:id',
        component: CalendarDetailComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [
        RouterModule
    ]
})

export class CalendarsRoutingModule { }
