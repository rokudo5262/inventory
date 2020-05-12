import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CalendarAddComponent } from '../components/calendar-add/calendar-add.omponent';

@Component({
    selector: 'ngx-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
    constructor(private dialogService: NbDialogService,
    ) {
    }
    ngOnInit() {
    }
    add() {
        this.dialogService.open(CalendarAddComponent);
    }
}
