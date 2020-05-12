import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Calendar } from '@app/@core/data/calendar';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { CalendarsApiActions } from '@app/calendars/actions';

@Component({
    selector: 'ngx-calendar-add',
    template: `
    <nb-card>
        <nb-card-header>Add Calendar</nb-card-header>
        <nb-card-body>
            <form [formGroup]="addCalendarForm" method="POST">
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Recurring</label>
                    <div class="col-sm-9">
                        <input type="text" name="recurring" formControlName="recurring" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Working Date</label>
                    <div class="col-sm-9">
                        <input type="text" name="workingDate" formControlName="workingDate" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Working Day</label>
                    <div class="col-sm-9">
                        <input type="text" name="workingDay" formControlName="workingDay" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-9">
                        <input type="text" name="description" formControlName="description" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Non Working</label>
                    <div class="col-sm-9">
                        <input type="text" name="nonWorking" formControlName="nonWorking" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Status</label>
                    <div class="col-sm-9">
                        <input type="text" name="status" formControlName="status" class="form-control" required>
                    </div>
                </div>
            </form>
            <div class="col-sm-9" class="button">
                <button class="btn btnSave" type="button" nbButton status="success" nbTooltip="Save" nbTooltipPlacement="left" (click)="submit(addCalendarForm.value)"><i class="fas fa-save"></i><span>Save</span></button>
                <button class="btn btnCancel" type="button" nbButton status="danger" nbTooltip="Cancel" nbTooltipPlacement="right" (click)="close()"><i class="fas fa-times-circle"></i><span>Cancel</span></button>
            </div>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    input {
        width: 100%;
        margin-bottom: 20px;
    }
    .btn {
        margin-left: 10px;
        width: 100px;
    }
    .btn span {
        margin-left: 5px;
    }
    .button {
        float: right;
    }
    `]
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
