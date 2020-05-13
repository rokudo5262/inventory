import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { Employee } from '@app/@core/data';
import { EmployeesActions } from '@app/employee/actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'ngx-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
})
export class EmployeeAddComponent implements OnInit {
  public addEmployeeForm: FormGroup;
  public employee: Employee;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<Employee>,
    private dialogRef: NbDialogRef<EmployeeAddComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.addEmployeeForm = this.fb.group({
      employeeCode: [uuid(), Validators.required],
      employeeName: ['', Validators.required],
      referenceEmployeeCode: ['', Validators.required],
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      phone2: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      address3: ['', Validators.required],
      address4: ['', Validators.required],
      hiredDate: ['', Validators.required],
      endDate: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      identityCard: ['', Validators.required],
      identityCardPlace: ['', Validators.required],
      identityCardDate: ['', Validators.required],
      identityCardAddress: ['', Validators.required],
      postalCode: ['', Validators.required],
      ward: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      jobTitle: ['', Validators.required],
      contractCode: ['', Validators.required],
      contractType: ['', Validators.required],
      contractExpiredDate: ['', Validators.required],
      healthAssuranceNumber: ['', Validators.required],
      educationDegree: ['', Validators.required],
      attribute1: ['', Validators.required],
      attribute2: ['', Validators.required],
      attribute3: ['', Validators.required],
      attribute4: ['', Validators.required],
      attribute5: ['', Validators.required],
      leader: ['', Validators.required],
      department: ['', Validators.required],
      salesGroup: ['', Validators.required],
      employeeGroup: ['', Validators.required],
      employeeType: ['', Validators.required],
      companyCode: ['', Validators.required],
      customerCode: ['', Validators.required],
      customerName: ['', Validators.required],
      locationCode: ['', Validators.required],
      locationName: ['', Validators.required],
      status: ['Active', Validators.required],
      source: ['1', Validators.required],
      remark: ['1', Validators.required],
      createdBy: ['1', Validators.required],
      // createdDateTime: ['', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      // lastUpdatedDateTime: ['', Validators.required],
      // rowNumber: ['', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.name !== '' && item.note !== '') {
      this.store.dispatch(EmployeesActions.addEmployee({ employee: item }));
    }
    this.close();
  }
}
