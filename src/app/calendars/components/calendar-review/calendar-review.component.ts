import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Calendar } from '@app/@core/data/calendar';
import { CalendarAddComponent } from '../calendar-add/calendar-add.omponent';

@Component({
    selector: 'ngx-calendar-review',
    templateUrl: './calendar-review.component.html',
    styleUrls: ['./calendar-review.component.scss'],
})

export class CalendarReviewComponent implements OnInit {
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
