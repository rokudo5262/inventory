import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Calendar } from '@app/@core/data/calendar';
import { CalendarAddComponent } from '@app/calendars/containers/calendar-add/calendar-add.omponent';

@Component({
    selector: 'ngx-calendar-detail',
    template: `
    <div>
        <p>
            ID: {{ calendar?calendar.id:'' }}
        </p>
        <p>
            Company Code: {{ calendar?calendar.companyCode:'' }}
        </p>
        <p>
            Customer Code: {{ calendar?calendar.customerCode:'' }}
        </p>
        <p>
            Recurring: {{ calendar?calendar.recurring:'' }}
        </p>
        <p>
            Working Date: {{ calendar?calendar.workingDate:'' }}
        </p>
        <p>
            Working Day: {{ calendar?calendar.workingDay:'' }}
        </p>
        <p>
            Description: {{ calendar?calendar.description:'' }}
        </p>
        <p>
            Non Working: {{ calendar?calendar.nonWorking:'' }}
        </p>
        <p>
            Status: {{ calendar?calendar.status:'' }}
        </p>
    </div>
    `,
    styles: [` `]
})

export class CalendarDetailComponent implements OnInit {
    @Input() calendar: Calendar;

    constructor(
        private route: Router,
        private dialogService: NbDialogService,
    ) {

    }

    ngOnInit() {

    }

    back() {
        this.route.navigate(['dashboard/Calendars']);
    }

    edit() {
        this.dialogService.open(CalendarAddComponent, {
            context: {
                calendar: this.calendar
            }
        });
    }
}
