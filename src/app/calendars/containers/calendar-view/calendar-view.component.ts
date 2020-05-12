import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '@app/@core/data/calendar';
import { Store, select } from '@ngrx/store';
import { NbDialogService } from '@nebular/theme';
import { CalendarSelectors } from '@app/calendars/selectors/calendar.selectors';
import { CalendarsApiActions } from '@app/calendars/actions';
import { CalendarAddComponent } from '../calendar-add/calendar-add.omponent';
import { Update } from '@ngrx/entity';
import { NonWorkingCheckboxComponent } from '@app/calendars/components/checkbox/nonWorking-checkbox.component';

@Component({
    selector: 'ngx-calendar-view',
    template: `
    <nb-card>
        <nb-card-header>
            <p>Calendars<p>
            <div class="button">
                <button class="btn btnAdd" (click)="add()" nbButton status="success" nbTooltip="Add New Calendar" nbTooltipPlacement="top"><i class="fa fa-plus" aria-hidden="true"></i><span>Calendar</span></button>
                <button class="btn btnSave" (click)="save()" nbButton status="info" nbTooltip="Save Calendars" nbTooltipPlacement="top"><i class="fas fa-save" aria-hidden="true"></i><span>Save</span></button>
                <button class="btn btnDelete" (click)="delete()" nbButton status="danger" nbTooltip="Delete Calendars" nbTooltipPlacement="top"><i class="fas fa-trash" aria-hidden="true"></i><span>Delete</span></button>
            </div>
        </nb-card-header>
        <nb-card-body>
            <ng2-smart-table [settings]="settings" [source]="calendars$ | async"
            (userRowSelect)="onUserRowSelect($event)"
            (deleteConfirm)="delete($event)">
            </ng2-smart-table>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    :host /deep/ .ng2-smart-action-multiple-select{
        text-align: center;
        width: 60px;
    }

    :host /deep/ .ng2-smart-action-multiple-select > input{
        width: 13px;
        height: 13px;
        display: unset;
        padding: 0;
        margin: 0;
    }

    p {
        float: left;
        font-size: 24px;
        margin: 10px 0;
        font-weight: bold;
    }

    .button {
        float: right;
    }

    .btn {
        width: 120px;
        margin-left: 10px;
    }

    .btn span {
        margin-left: 5px;
    }
    `]
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
                renderComponent: NonWorkingCheckboxComponent,
                // filter: {
                //     type: 'list',
                //     config: {
                //         selectText: '',
                //         list: [
                //             { value1: 'True', title: 'True' },
                //             { value2: 'False', title: 'False' },
                //         ],
                //     },
                // },
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
        private dialogService: NbDialogService,
    ) {
        this.calendars$ = this.store.pipe(select(CalendarSelectors.selectAllCalendars));
    }

    ngOnInit() {
        this.store.dispatch(CalendarsApiActions.getCalendars({ calendars: [] }));
    }

    add() {
        this.dialogService.open(CalendarAddComponent);
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
        this.store.dispatch(CalendarsApiActions.updateCalendar({ update: update }));
        event.confirm.resolve();
    }
    delete(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            this.store.dispatch(CalendarsApiActions.removeCalendar({ id: event.data.id }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUserRowSelect(event) {
        this.selectedRows = event.selected;
    }
}
