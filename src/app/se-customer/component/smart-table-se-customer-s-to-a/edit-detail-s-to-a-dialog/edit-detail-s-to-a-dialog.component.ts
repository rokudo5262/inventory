import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-se-customer-s-to-a-editt-dialog',
  templateUrl: './edit-detail-s-to-a-dialog.component.html',
  styleUrls: ['./edit-detail-s-to-a-dialog.component.scss']
})
export class SecondaryCustomerstoaEditDialogComponent implements OnInit {
  public addsecustomerstoaForm: FormGroup;
  public secustomerstoa: SecondaryCustomerShipToAddress;
  @Output() response: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    protected dialogRef: NbDialogRef<SecondaryCustomerstoaEditDialogComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addsecustomerstoaForm = this.fb.group({
      id:
        this.secustomerstoa ? this.secustomerstoa.id : [0, Validators.required],
      companyCode: [
        this.secustomerstoa ? this.secustomerstoa.companyCode : '', Validators.required],
      customerCode: [
        this.secustomerstoa ? this.secustomerstoa.customerCode : '', Validators.required],
      secondaryCustomerCode: [
        this.secustomerstoa ? this.secustomerstoa.secondaryCustomerCode : '', Validators.required],
      shipToCode: [
        this.secustomerstoa ? this.secustomerstoa.shipToCode : '', Validators.required],
      shipToName: [
        this.secustomerstoa ? this.secustomerstoa.shipToName : '', Validators.required],
      shipToAddress: [
        this.secustomerstoa ? this.secustomerstoa.shipToAddress : '', Validators.required],
      contact: [
        this.secustomerstoa ? this.secustomerstoa.contact : '', Validators.required],
      deliveryCondition: [
        this.secustomerstoa ? this.secustomerstoa.deliveryCondition : '', Validators.required],
      deliveryTime: [
        this.secustomerstoa ? this.secustomerstoa.deliveryTime : '', Validators.required],
      otherRequest: [
        this.secustomerstoa ? this.secustomerstoa.otherRequest : '', Validators.required],
      attachedDocument: [
        this.secustomerstoa ? this.secustomerstoa.attachedDocument : '', Validators.required],
      deleted: [
        this.secustomerstoa ? this.secustomerstoa.deleted : false, Validators.required],
      source: [
        this.secustomerstoa ? this.secustomerstoa.source : null, Validators.required],
      createdBy: [
        this.secustomerstoa ? this.secustomerstoa.createdBy : null, Validators.required],
      createdDateTime: [
        this.secustomerstoa ? this.secustomerstoa.createdDateTime : null, Validators.required],
      lastUpdatedBy: [
        this.secustomerstoa ? this.secustomerstoa.lastUpdatedBy : null, Validators.required],
      rowVersion: [
        this.secustomerstoa ? this.secustomerstoa.rowVersion : [], Validators.required],
      lastUpdatedDateTime: [
        this.secustomerstoa ? this.secustomerstoa.lastUpdatedDateTime : null, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    // if(item.id === 0){
    //   this.store.dispatch(SecondaryCustomerShipToAddressApiActions.addSECustomerStoA({secustomerstoa: item}))
    // }
    // else{
    //   this.store.dispatch(SecondaryCustomerShipToAddressApiActions.updateSECustomerStoA({update:
    //   {
    //     id: item.id,
    //     changes: item
    //   }}))
    // }
    // this.close();
    this.dialogRef.close(item);
  }
}
