import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Calendar } from '@app/@core/data/calendar';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { CalendarsApiActions } from '@app/calendars/actions';

@Component({
    selector: 'ngx-calendar-add',
    templateUrl: './calendar-add.component.html',
    styleUrls: ['./calendar-add.component.scss'],
})
export class CalendarAddComponent implements OnInit {
    public addCalendarForm: FormGroup;
    public calendar: Calendar;
    @Output() response: EventEmitter<any> = new EventEmitter();
    constructor(
        private fb: FormBuilder,
        private store: Store<Calendar>,
        private dialogRef: NbDialogRef<CalendarAddComponent>,
    ) { }
    ngOnInit() {
        this.createForm();
    }
    createForm = () => {
        this.addCalendarForm = this.fb.group({
            companyCode: ['', Validators.required],
            customerCode: ['', Validators.required],
            recurring: ['', Validators.required],
            workingDate: ['', Validators.required],
            workingDay: ['', Validators.required],
            description: ['', Validators.required],
            nonWorking: [false, Validators.required],
            status: ['', Validators.required],
            deleted: [false, Validators.required],
            id: [0, Validators.required],
        });
    }
    close() {
        this.dialogRef.close();
    }
    submit(item) {
        if (item.companyCode !== '' &&
            item.customerCode !== '' &&
            item.recurring !== '' &&
            item.workingDate !== '' &&
            item.workingDay !== '' &&
            item.description !== '' &&
            item.nonWorking !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item,
                };
                this.store.dispatch(CalendarsApiActions.updateCalendar({ update: update }));
            } else {
                this.store.dispatch(CalendarsApiActions.addCalendar({ calendar: item })),
                    alert('Add new Calendar successfully!');
            }
            this.close();
        } else {
            alert('Please fill in necessary field!');
        }
    }
}
