import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { SecondaryCustomerApiActions, SecondaryCustomerShipToAddressApiActions } from '@app/se-customer/actions';
import { NbDialogRef } from '@nebular/theme';
import { SecondaryCustomerSelectors } from '@app/se-customer/selectors/se-customer-list.selectors';

@Component({
  selector: 'ngx-se-customer-s-to-a-add',
  templateUrl: './add-s-to-a.component.html',
  styleUrls: ['./add-s-to-a.component.scss']
})
export class SecondaryCustomerstoaAddComponent implements OnInit {
  secondarycustomers$: Observable<SecondaryCustomer[]>;
  scForm = new FormControl('');
  scInfoForm: FormGroup;
  public addsecustomerstoaForm: FormGroup;
  public secustomerstoa: SecondaryCustomerShipToAddress;
  @Output() response: EventEmitter<any> = new EventEmitter();
  scSelected: SecondaryCustomer = {
    tax: null,
    rowNumber: null,
    creditDay: null,
    lastUpdatedBy: null,
    lastUpdatedDateTime: null,
    pricePaymentTermCode: null,
    deleted: null,
    id: null,
    companyCode: null,
    customerCode: null,
    secondaryCustomerCode: null,
    secondaryCustomerName: null,
    secondaryCustomerName2: null,
    legalOwnerName: null,
    referenceSecondaryCustomerCode: null,
    parentSecondaryCustomerCode: null,
    contactName: null,
    gender: null,
    dateOfBirth: null,
    givenName: null,
    surname: null,
    identityCard: null,
    taxType: null,
    taxCode: null,
    fax: null,
    email: null,
    phone: null,
    phone2: null,
    address: null,
    address2: null,
    address3: null,
    country: null,
    state: null,
    city: null,
    postCode: null,
    club: null,
    anchorAccount: null,
    enviromentallyConscious: null,
    regionCode: null,
    regionL1: null,
    regionL2: null,
    regionL3: null,
    regionL4: null,
    regionL5: null,
    hierarchyCode: null,
    hierarchyL01: null,
    hierarchyL02: null,
    hierarchyL03: null,
    shipToAddress: null,
    shipToAddress2: null,
    shipToPhone: null,
    paymentTerm: null,
    latitude: null,
    longitude: null,
    creditLimit: null,
    bankCode: null,
    bankName: null,
    bankAddress: null,
    bankAccount: null,
    bankAccountName: null,
    secondaryCustomerGroup: null,
    secondaryCustomerClass: null,
    attribute1: null,
    attribute2: null,
    remark: null,
    status: null,
    systemStatus: null,
    defaultDeliveryDay: null,
    contractExpiredDate: null,
    title: null,
    customerSegment: null,
    secondaryCustomerType: null,
    bankBrandName: null,
    bankBrandCode: null,
    identityCardDate: null,
    identityCardPlace: null,
    source: null,
    createdBy: null,
    createdDateTime: null,
    rowVersion: null,
    attribute3: null,
    attribute4: null,
    attribute5: null,
    paymentTermDescription: null,
    paymentMethod: null,
    paymentMethodDescription: null,
    secondaryCustomerCategory: null,
    pricePaymentTerm: null,
    attribute6: null,
    billToSecondaryCustomerCode: null,
    vatregistrationId: null,
    secondaryCustomerTypeDescription: null,
    secondaryCustomerClassDescription: null,
    customerSegmentDescription: null,
    secondaryCustomerGroupDescription: null,
    parentSecondaryCustomerCodeDescription: null,
    attribute7: null,
    billToSecondaryCustomerName: null,
    businessType: null,
    secondaryCustomerNameInvoice: null,
    imageSecondarycustomer: {
      thumbnail: null,
      smallThumbnail: null,
    },
  };
  constructor(
    private fb: FormBuilder,
    private store: Store<SecondaryCustomer>,
    protected dialogRef: NbDialogRef<SecondaryCustomerstoaAddComponent>,
    private store1: Store<SecondaryCustomerShipToAddress>,
  ) {
    this.secondarycustomers$ = this.store.pipe(select(SecondaryCustomerSelectors
      .selectAllSecondaryCustomers));
  }
  ngOnInit() {
    this.store.dispatch(SecondaryCustomerApiActions.getSECustomerLists({ secondarycustomers: [] }));
    this.createForm();
  }
  createForm = () => {
    this.addsecustomerstoaForm = this.fb.group({
      id: [
        this.secustomerstoa ? this.secustomerstoa.id : 0, Validators.required],
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
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.shipToName !== '' &&
      item.shipToCode !== '') {
      //   if(item.id != 0){
      //     const update = {
      //       id: item.id,
      //       changes: item
      //     }
      //     this.store1.dispatch(StructureValueApiActions.updateStructureValue({update: update}))
      // }
      // else{
      this.store1.dispatch(SecondaryCustomerShipToAddressApiActions
        .addSECustomerStoA({ secustomerstoa: item }));
    }
    this.close();
  }
}
