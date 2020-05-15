import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '@app/@core/data/calendar';
import { Store, select } from '@ngrx/store';
import { CalendarSelectors } from '@app/calendars/selectors/calendar.selectors';
import { CalendarsActions } from '@app/calendars/actions';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'ngx-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {

    settings = {
        actions: false,
        selectMode: 'multi',
        columns: {
            recurring: {
                title: 'Recurring',
                width: '14%',
                filter: {
                    type: 'list',
                    config: {
                        selectText: '',
                        list: [
                            { value1: 'Annual Recurring', title: 'Annual Recurring' },
                            { value2: 'Weekly Recurring', title: 'Weekly Recurring' },
                            { value3: 'Specific Date', title: 'Specific Date' },
                        ],
                    },
                }
            },
            workingDate: {
                title: 'Working Date',
                type: 'string',
                width: '13%',
            },
            workingDay: {
                title: 'Working Day',
                width: '12%',
                filter: {
                    type: 'list',
                    config: {
                        selectText: '',
                        list: [
                            { value1: 'Monday', title: 'Monday' },
                            { value2: 'Tuesday', title: 'Tuesday' },
                            { value3: 'Wednesday', title: 'Wednesday' },
                            { value4: 'Thusday', title: 'Thusday' },
                            { value5: 'Friday', title: 'Friday' },
                            { value6: 'Saturday', title: 'Saturday' },
                            { value7: 'Sunday', title: 'Sunday' },
                        ]
                    }
                }
            },
            description: {
                title: 'Description',
                type: 'string',
                width: '43%',
            },
            nonWorking: {
                title: 'Non Working',
                width: '13%',
                type: 'custom',
            },
            status: {
                title: 'Status',
                type: 'string',
                width: '5%',
            },
        },
    };
    calendars$: Observable<Calendar[]>;
    dialogRef: any;
    selectedRows: any;
    constructor(
        private store: Store<Calendar>,
    ) {
        this.calendars$ = this.store.pipe(select(CalendarSelectors.selectAllCalendars));
        this.calendars$.subscribe(g => console.log(g.length));
    }
    ngOnInit() {
        this.store.dispatch(CalendarsActions.getCalendars({ calendars: [] }));
    }
    close() {
        this.dialogRef.reject();
    }
    edit(event) {
        const changes = event.newData;
        const update: Update<Calendar> = {
            id: event.data.id,
            changes: changes
        };
        this.store.dispatch(CalendarsActions.updateCalendar({ update: update }));
        event.confirm.resolve();
    }
    delete(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            this.store.dispatch(CalendarsActions.removeCalendar({ id: event.data.id }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUserRowSelect(event) {
        this.selectedRows = event.selected;
    }
}
