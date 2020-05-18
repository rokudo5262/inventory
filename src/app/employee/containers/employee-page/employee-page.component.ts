import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EmployeeAddComponent } from '@app/employee/components/employee-add/employee-add.component';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
})

export class EmployeePageComponent implements OnInit {
    constructor(
        private route: Router,
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(EmployeeAddComponent);
    }
    navigate() {
        this.route.navigate(['dashboard/employeeresponsibilities/library']);
    }
    ngOnInit() {
    }
}
