import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { EmployeesActions } from '@app/employee/actions';
import { Employee } from '@app/@core/data';

@Component({
  selector: 'ngx-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss'],

})
export class EmployeeUpdateComponent implements OnInit {
  public updateEmployeeForm: FormGroup;
  public employee: Employee;
  constructor(
    private fb: FormBuilder,
    private store: Store<Employee>,
    private dialogRef: NbDialogRef<EmployeeUpdateComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateEmployeeForm = this.fb.group({
      employeeCode: [this.employee ? this.employee.employeeCode : '', Validators.required],
      employeeName: [this.employee ? this.employee.employeeName : '', Validators.required],
      referenceEmployeeCode: [this.employee ? this.employee.referenceEmployeeCode : '', Validators.required],
      userName: [this.employee ? this.employee.userName : '', Validators.required],
      gender: [this.employee ? this.employee.gender : '', Validators.required],
      description: this.employee ? this.employee.description : ['', Validators.required],
      email: [this.employee ? this.employee.email : '', Validators.required],
      phone: [this.employee ? this.employee.phone : '', Validators.required],
      phone2: [this.employee ? this.employee.phone2 : '', Validators.required],
      address: [this.employee ? this.employee.address : '', Validators.required],
      address2: [this.employee ? this.employee.address2 : '', Validators.required],
      address3: [this.employee ? this.employee.address3 : '', Validators.required],
      address4: [this.employee ? this.employee.address4 : '', Validators.required],
      hiredDate: [this.employee ? this.employee.hiredDate : '', Validators.required],
      endDate: [this.employee ? this.employee.endDate : '', Validators.required],
      dateOfBirth: [this.employee ? this.employee.dateOfBirth : '', Validators.required],
      identityCard: [this.employee ? this.employee.identityCard : '', Validators.required],
      identityCardPlace: [this.employee ? this.employee.identityCardPlace : '', Validators.required],
      identityCardDate: [this.employee ? this.employee.identityCardDate : '', Validators.required],
      identityCardAddress: [this.employee ? this.employee.identityCardAddress : '', Validators.required],
      postalCode: [this.employee ? this.employee.postalCode : '', Validators.required],
      ward: [this.employee ? this.employee.ward : '', Validators.required],
      district: [this.employee ? this.employee.district : '', Validators.required],
      city: [this.employee ? this.employee.city : '', Validators.required],
      province: [this.employee ? this.employee.province : '', Validators.required],
      state: [this.employee ? this.employee.state : '', Validators.required],
      country: [this.employee ? this.employee.country : '', Validators.required],
      jobTitle: [this.employee ? this.employee.jobTitle : '', Validators.required],
      contractCode: [this.employee ? this.employee.contractCode : '', Validators.required],
      contractType: [this.employee ? this.employee.contractType : '', Validators.required],
      contractExpiredDate: [this.employee ? this.employee.contractExpiredDate : '', Validators.required],
      healthAssuranceNumber: [this.employee ? this.employee.healthAssuranceNumber : '', Validators.required],
      educationDegree: [this.employee ? this.employee.educationDegree : '', Validators.required],
      attribute1: [this.employee ? this.employee.attribute1 : '', Validators.required],
      attribute2: [this.employee ? this.employee.attribute2 : '', Validators.required],
      attribute3: [this.employee ? this.employee.attribute3 : '', Validators.required],
      attribute4: [this.employee ? this.employee.attribute4 : '', Validators.required],
      attribute5: [this.employee ? this.employee.attribute5 : '', Validators.required],
      leader: [this.employee ? this.employee.leader : '', Validators.required],
      department: [this.employee ? this.employee.department : '', Validators.required],
      salesGroup: [this.employee ? this.employee.salesGroup : '', Validators.required],
      employeeGroup: [this.employee ? this.employee.employeeGroup : '', Validators.required],
      employeeType: [this.employee ? this.employee.employeeType : '', Validators.required],
      companyCode: [this.employee ? this.employee.companyCode : '', Validators.required],
      customerCode: [this.employee ? this.employee.customerCode : '', Validators.required],
      customerName: [this.employee ? this.employee.customerName : '', Validators.required],
      locationCode: [this.employee ? this.employee.locationCode : '', Validators.required],
      locationName: [this.employee ? this.employee.locationName : '', Validators.required],
      status: [this.employee ? this.employee.status : '', Validators.required],
      source: [this.employee ? this.employee.source : '', Validators.required],
      remark: [this.employee ? this.employee.remark : '', Validators.required],
      createdBy: [this.employee ? this.employee.createdBy : '', Validators.required],
      createdDateTime: [this.employee ? this.employee.createdDateTime : '', Validators.required],
      lastUpdatedBy: [this.employee ? this.employee.lastUpdatedBy : '', Validators.required],
      lastUpdatedDateTime: [this.employee ? this.employee.lastUpdatedDateTime : '', Validators.required],
      // rowNumber: [this.employee ? this.employee.rowNumber : '', Validators.required],
      // deleted: [this.employee ? this.employee.deleted : '', Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    const update = {
      id: item.employeeCode,
      changes: item
    };
    this.store.dispatch(EmployeesActions.updateEmployee({ update: update }));
    this.close();
  }
}
