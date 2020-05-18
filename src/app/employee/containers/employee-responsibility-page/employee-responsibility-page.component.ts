import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EmployeeResponsibilityAddComponent } from '@app/employee/components/employee-responsibility-add/employee-responsibility-add.component';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-employee-responsibility-page',
    templateUrl: './employee-responsibility-page.component.html',
    styleUrls: ['./employee-responsibility-page.component.scss']
})

export class EmployeeResponsibilityPageComponent implements OnInit {
    constructor(
        private route: Router,
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(EmployeeResponsibilityAddComponent);
    }
    navigate() {
        this.route.navigate(['dashboard/employees/library']);
    }
    ngOnInit() {
    }
}
