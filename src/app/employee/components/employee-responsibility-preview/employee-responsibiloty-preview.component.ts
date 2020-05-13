import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { EmployeeResponsibility } from '@app/@core/data';
import { EmployeeResponsibilityUpdateComponent } from '../employee-responsibility-update/employee-responsibility-update.component';
@Component({
  selector: 'ngx-employee-responsibility-preview',
  templateUrl: './employee-responsibility-preview.component.html',
  styleUrls: ['./employee-responsibility-preview.component.scss'],
})

export class EmployeeResponsibilityPreviewComponent implements OnInit {
  @Input() employeeresponsibility: EmployeeResponsibility;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/employeeresponsibilities/employeeresponsibility']);
  }
  edit() {
    this.dialogService.open(EmployeeResponsibilityUpdateComponent, {
      context: {
        employeeresponsibility: this.employeeresponsibility
      }
    });
  }
}
