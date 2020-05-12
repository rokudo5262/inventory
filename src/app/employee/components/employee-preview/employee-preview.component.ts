import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Employee } from '@app/@core/data';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
@Component({
  selector: 'ngx-employee-preview',
  templateUrl: './employee-preview.component.html',
})

export class EmployeePreviewComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/employees/employee']);
  }

  edit() {
    this.dialogService.open(EmployeeUpdateComponent, {
      context: {
        employee: this.employee
      }
    });
  }
}
