import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SecondaryCustomerApiActions } from '@app/se-customer/actions';

@Component({
  selector: 'ngx-se-customer-add',
  templateUrl: './add-smart-table-se-customer.component.html',
  styleUrls: ['./add-smart-table-se-customer.component.scss'],
})
export class SecondaryCustomerAddComponent implements OnInit {
  public addSecondaryCustomerForm: FormGroup;
  public secondarycustomer: SecondaryCustomer;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<SecondaryCustomer>,
    protected dialogRef: NbDialogRef<SecondaryCustomerAddComponent>,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.addSecondaryCustomerForm = this.fb.group({
      id: [
        this.secondarycustomer ? this.secondarycustomer.id : 0,
        Validators.required],
      companyCode: [
        this.secondarycustomer ? this.secondarycustomer.companyCode : '',
        Validators.required],
      customerCode: [
        this.secondarycustomer ? this.secondarycustomer.customerCode : '',
        Validators.required],
      secondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerCode : '',
        Validators.required],
      secondaryCustomerName: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerName : '',
        Validators.required],
      secondaryCustomerName2: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerName2 : '',
        Validators.required],
      address: [
        this.secondarycustomer ? this.secondarycustomer.address : '',
        Validators.required],
      status: [
        this.secondarycustomer ? this.secondarycustomer.status : 'I',
        Validators.required],
      phone: [
        this.secondarycustomer ? this.secondarycustomer.phone : '',
        Validators.required],
      postCode: [
        this.secondarycustomer ? this.secondarycustomer.postCode : '',
        Validators.required],
      deleted: [
        this.secondarycustomer ? this.secondarycustomer.deleted : false,
        Validators.required],
      phone2: [
        this.secondarycustomer ? this.secondarycustomer.phone2 : '',
        Validators.required],
      contactName: [
        this.secondarycustomer ? this.secondarycustomer.contactName : '',
        Validators.required],
      email: [
        this.secondarycustomer ? this.secondarycustomer.email : '',
        Validators.required],
      dateOfBirth: [
        this.secondarycustomer ? this.secondarycustomer.dateOfBirth : '',
        Validators.required],
      shipToAddress: [
        this.secondarycustomer ? this.secondarycustomer.shipToAddress : '',
        Validators.required],
      shipToPhone: [
        this.secondarycustomer ? this.secondarycustomer.shipToPhone : '',
        Validators.required],
      remark: [
        this.secondarycustomer ? this.secondarycustomer.remark : '',
        Validators.required],
      secondaryCustomerType: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerType : '',
        Validators.required],
      secondaryCustomerClass: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerClass : '',
        Validators.required],
      customerSegment: [
        this.secondarycustomer ? this.secondarycustomer.customerSegment : '',
        Validators.required],
      customerSegmentDescription: [
        this.secondarycustomer ? this.secondarycustomer.customerSegmentDescription : '',
        Validators.required],
      parentSecondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.parentSecondaryCustomerCode : '',
        Validators.required],
      attribute1: [
        this.secondarycustomer ? this.secondarycustomer.attribute1 : '',
        Validators.required],
      attribute2: [
        this.secondarycustomer ? this.secondarycustomer.attribute2 : '',
        Validators.required],
      attribute3: [
        this.secondarycustomer ? this.secondarycustomer.attribute3 : '',
        Validators.required],
      attribute4: [
        this.secondarycustomer ? this.secondarycustomer.attribute4 : '',
        Validators.required],
      attribute5: [
        this.secondarycustomer ? this.secondarycustomer.attribute5 : '',
        Validators.required],
      attribute6: [
        this.secondarycustomer ? this.secondarycustomer.attribute6 : '',
        Validators.required],
      secondaryCustomerGroup: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerGroup : '',
        Validators.required],
      paymentTerm: [
        this.secondarycustomer ? this.secondarycustomer.paymentTerm : '',
        Validators.required],
      paymentTermDescription: [
        this.secondarycustomer ? this.secondarycustomer.paymentTermDescription : '',
        Validators.required],
      paymentMethod: [
        this.secondarycustomer ? this.secondarycustomer.paymentMethod : '',
        Validators.required],
      paymentMethodDescription: [
        this.secondarycustomer ? this.secondarycustomer.paymentMethodDescription : '',
        Validators.required],
      taxCode: [
        this.secondarycustomer ? this.secondarycustomer.taxCode : '',
        Validators.required],
      businessType: [this.secondarycustomer ? this.secondarycustomer.businessType : '',
      Validators.required],
      pricePaymentTermCode: [
        this.secondarycustomer ? this.secondarycustomer.pricePaymentTermCode : '',
        Validators.required],
      billToSecondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.billToSecondaryCustomerCode : '',
        Validators.required],
      billToSecondaryCustomerName: [
        this.secondarycustomer ? this.secondarycustomer.billToSecondaryCustomerName : '',
        Validators.required],
      vatregistrationId: [
        this.secondarycustomer ? this.secondarycustomer.vatregistrationId : '',
        Validators.required],
      secondaryCustomerNameInvoice: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerNameInvoice : '',
        Validators.required],
      creditLimit: [
        this.secondarycustomer ? this.secondarycustomer.creditLimit : '',
        Validators.required],
      parentSecondaryCustomerCodeDescription: [
        this.secondarycustomer ? this.secondarycustomer.parentSecondaryCustomerCodeDescription : '',
        Validators.required],
      secondaryCustomerClassDescription: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerClassDescription : '',
        Validators.required],
      secondaryCustomerTypeDescription: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerTypeDescription : '',
        Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.CompanyCode !== '' &&
      item.CustomerCode !== '') {
      this.store.dispatch(SecondaryCustomerApiActions
        .addSECustomerList({ secondarycustomer: item }));
    }
    this.close();
  }
}
