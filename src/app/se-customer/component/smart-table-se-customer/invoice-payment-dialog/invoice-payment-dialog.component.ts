import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SecondaryCustomerApiActions } from '@app/se-customer/actions';

@Component({
  selector: 'ngx-se-customer-invoice-payment',
  templateUrl: './invoice-payment-dialog.component.html',
  styleUrls: ['./invoice-payment-dialog.component.scss']
})
export class InvoicePaymentEditComponent implements OnInit {
  public addSecondaryCustomerForm: FormGroup;
  public secondarycustomer: SecondaryCustomer;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<SecondaryCustomer>,
    protected dialogRef: NbDialogRef<InvoicePaymentEditComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.addSecondaryCustomerForm = this.fb.group({
      id: [this.secondarycustomer ? this.secondarycustomer.id : 0,
      Validators.required],
      companyCode: [this.secondarycustomer ? this.secondarycustomer.companyCode : '',
      Validators.required],
      customerCode: [this.secondarycustomer ? this.secondarycustomer.customerCode : '',
      Validators.required],
      secondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerCode : '',
        Validators.required
      ],
      secondaryCustomerName: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerName : '',
        Validators.required
      ],
      secondaryCustomerName2: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerName2 : '',
        Validators.required
      ],
      address: [this.secondarycustomer ? this.secondarycustomer.address : '',
      Validators.required],
      status: [this.secondarycustomer ? this.secondarycustomer.status : 'I',
      Validators.required],
      phone: [this.secondarycustomer ? this.secondarycustomer.phone : '',
      Validators.required],
      postCode: [this.secondarycustomer ? this.secondarycustomer.postCode : '',
      Validators.required],
      deleted: [this.secondarycustomer ? this.secondarycustomer.deleted : false,
      Validators.required],
      phone2: [this.secondarycustomer ? this.secondarycustomer.phone2 : '',
      Validators.required],
      contactName: [this.secondarycustomer ? this.secondarycustomer.contactName : '',
      Validators.required],
      email: [this.secondarycustomer ? this.secondarycustomer.email : '',
      Validators.required],
      dateOfBirth: [this.secondarycustomer ? this.secondarycustomer.dateOfBirth : '',
      Validators.required],
      shipToAddress: [this.secondarycustomer ? this.secondarycustomer.shipToAddress : '',
      Validators.required],
      shipToPhone: [this.secondarycustomer ? this.secondarycustomer.shipToPhone : '',
      Validators.required],
      remark: [this.secondarycustomer ? this.secondarycustomer.remark : '',
      Validators.required],
      secondaryCustomerType: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerType : '',
        Validators.required
      ],
      secondaryCustomerClass: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerClass : '',
        Validators.required
      ],
      customerSegment: [this.secondarycustomer ? this.secondarycustomer.customerSegment : '',
      Validators.required],
      customerSegmentDescription: [
        this.secondarycustomer ? this.secondarycustomer.customerSegmentDescription : '',
        Validators.required
      ],
      parentSecondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.parentSecondaryCustomerCode : '',
        Validators.required
      ],
      attribute1: [this.secondarycustomer ? this.secondarycustomer.attribute1 : '',
      Validators.required],
      attribute2: [this.secondarycustomer ? this.secondarycustomer.attribute2 : '',
      Validators.required],
      attribute3: [this.secondarycustomer ? this.secondarycustomer.attribute3 : '',
      Validators.required],
      attribute4: [this.secondarycustomer ? this.secondarycustomer.attribute4 : '',
      Validators.required],
      attribute5: [this.secondarycustomer ? this.secondarycustomer.attribute5 : '',
      Validators.required],
      attribute6: [this.secondarycustomer ? this.secondarycustomer.attribute6 : '',
      Validators.required],
      secondaryCustomerGroup: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerGroup : '',
        Validators.required
      ],
      paymentTerm: [this.secondarycustomer ? this.secondarycustomer.paymentTerm : '',
      Validators.required],
      paymentTermDescription: [
        this.secondarycustomer ? this.secondarycustomer.paymentTermDescription : '',
        Validators.required
      ],
      paymentMethod: [this.secondarycustomer ? this.secondarycustomer.paymentMethod : '',
      Validators.required],
      paymentMethodDescription: [
        this.secondarycustomer ? this.secondarycustomer.paymentMethodDescription : '',
        Validators.required
      ],
      taxCode: [this.secondarycustomer ? this.secondarycustomer.taxCode : '',
      Validators.required],
      businessType: [this.secondarycustomer ? this.secondarycustomer.businessType : '',
      Validators.required],
      pricePaymentTermCode: [
        this.secondarycustomer ? this.secondarycustomer.pricePaymentTermCode : '',
        Validators.required
      ],
      billToSecondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.billToSecondaryCustomerCode : '',
        Validators.required
      ],
      billToSecondaryCustomerName: [
        this.secondarycustomer ? this.secondarycustomer.billToSecondaryCustomerName : '',
        Validators.required
      ],
      vatregistrationId: [
        this.secondarycustomer ? this.secondarycustomer.vatregistrationId : '',
        Validators.required
      ],
      secondaryCustomerNameInvoice: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerNameInvoice : '',
        Validators.required
      ],
      creditLimit: [this.secondarycustomer ? this.secondarycustomer.creditLimit : '',
      Validators.required],
      parentSecondaryCustomerCodeDescription: [
        this.secondarycustomer ? this.secondarycustomer.parentSecondaryCustomerCodeDescription : '',
        Validators.required
      ],
      secondaryCustomerClassDescription: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerClassDescription : '',
        Validators.required
      ],
      secondaryCustomerTypeDescription: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerTypeDescription : '',
        Validators.required
      ],
      legalOwnerName: [
        this.secondarycustomer ? this.secondarycustomer.legalOwnerName : null,
      Validators.required],
      referenceSecondaryCustomerCode: [
        this.secondarycustomer ? this.secondarycustomer.referenceSecondaryCustomerCode : null,
        Validators.required
      ],
      gender: [this.secondarycustomer ? this.secondarycustomer.gender : null,
      Validators.required],
      givenName: [this.secondarycustomer ? this.secondarycustomer.givenName : null,
      Validators.required],
      surname: [this.secondarycustomer ? this.secondarycustomer.surname : null,
      Validators.required],
      identityCard: [this.secondarycustomer ? this.secondarycustomer.identityCard : null,
      Validators.required],
      taxType: [this.secondarycustomer ? this.secondarycustomer.taxType : null,
      Validators.required],
      fax: [this.secondarycustomer ? this.secondarycustomer.fax : null,
      Validators.required],
      address2: [this.secondarycustomer ? this.secondarycustomer.address2 : null,
      Validators.required],
      address3: [this.secondarycustomer ? this.secondarycustomer.address3 : null,
      Validators.required],
      country: [this.secondarycustomer ? this.secondarycustomer.country : null,
      Validators.required],
      state: [this.secondarycustomer ? this.secondarycustomer.state : null,
      Validators.required],
      city: [this.secondarycustomer ? this.secondarycustomer.city : null,
      Validators.required],
      club: [this.secondarycustomer ? this.secondarycustomer.club : null,
      Validators.required],
      anchorAccount: [
        this.secondarycustomer ? this.secondarycustomer.anchorAccount : null,
      Validators.required],
      enviromentallyConscious: [
        this.secondarycustomer ? this.secondarycustomer.enviromentallyConscious : null,
        Validators.required
      ],
      regionCode: [this.secondarycustomer ? this.secondarycustomer.regionCode : null,
      Validators.required],
      regionL1: [this.secondarycustomer ? this.secondarycustomer.regionL1 : null,
      Validators.required],
      regionL2: [this.secondarycustomer ? this.secondarycustomer.regionL2 : null,
      Validators.required],
      regionL3: [this.secondarycustomer ? this.secondarycustomer.regionL3 : null,
      Validators.required],
      regionL4: [this.secondarycustomer ? this.secondarycustomer.regionL4 : null,
      Validators.required],
      regionL5: [this.secondarycustomer ? this.secondarycustomer.regionL5 : null,
      Validators.required],
      hierarchyCode: [this.secondarycustomer ? this.secondarycustomer.hierarchyCode : null,
      Validators.required],
      hierarchyL01: [this.secondarycustomer ? this.secondarycustomer.hierarchyL01 : null,
      Validators.required],
      hierarchyL02: [this.secondarycustomer ? this.secondarycustomer.hierarchyL02 : null,
      Validators.required],
      hierarchyL03: [this.secondarycustomer ? this.secondarycustomer.hierarchyL03 : null,
      Validators.required],
      shipToAddress2: [this.secondarycustomer ? this.secondarycustomer.shipToAddress2 : null,
      Validators.required],
      creditDay: [this.secondarycustomer ? this.secondarycustomer.creditDay : null,
      Validators.required],
      latitude: [this.secondarycustomer ? this.secondarycustomer.latitude : null,
      Validators.required],
      longitude: [this.secondarycustomer ? this.secondarycustomer.longitude : null,
      Validators.required],
      bankCode: [this.secondarycustomer ? this.secondarycustomer.bankCode : null,
      Validators.required],
      bankName: [this.secondarycustomer ? this.secondarycustomer.bankName : null,
      Validators.required],
      bankAccount: [this.secondarycustomer ? this.secondarycustomer.bankAccount : null,
      Validators.required],
      bankAddress: [this.secondarycustomer ? this.secondarycustomer.bankAddress : null,
      Validators.required],
      bankAccountName: [this.secondarycustomer ? this.secondarycustomer.bankAccountName : null,
      Validators.required],
      systemStatus: [this.secondarycustomer ? this.secondarycustomer.systemStatus : null,
      Validators.required],
      defaultDeliveryDay: [
        this.secondarycustomer ? this.secondarycustomer.defaultDeliveryDay : null,
      Validators.required],
      contractExpiredDate: [
        this.secondarycustomer ? this.secondarycustomer.contractExpiredDate : null,
      Validators.required],
      title: [this.secondarycustomer ? this.secondarycustomer.title : null,
      Validators.required],
      bankBrandName: [this.secondarycustomer ? this.secondarycustomer.bankBrandName : null,
      Validators.required],
      bankBrandCode: [this.secondarycustomer ? this.secondarycustomer.bankBrandCode : null,
      Validators.required],
      identityCardDate: [this.secondarycustomer ? this.secondarycustomer.identityCardDate : null,
      Validators.required],
      identityCardPlace: [this.secondarycustomer ? this.secondarycustomer.identityCardPlace : null,
      Validators.required],
      source: [this.secondarycustomer ? this.secondarycustomer.source : null,
      Validators.required],
      createdBy: [this.secondarycustomer ? this.secondarycustomer.createdBy : null,
      Validators.required],
      createdDateTime: [this.secondarycustomer ? this.secondarycustomer.createdDateTime : null,
      Validators.required],
      lastUpdatedBy: [this.secondarycustomer ? this.secondarycustomer.lastUpdatedBy : null,
      Validators.required],
      rowVersion: [this.secondarycustomer ? this.secondarycustomer.rowVersion : null,
      Validators.required],
      lastUpdatedDateTime: [this.secondarycustomer ? this.secondarycustomer.lastUpdatedDateTime : null,
      Validators.required],
      secondaryCustomerCategory: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerCategory : null,
      Validators.required],
      pricePaymentTerm: [
        this.secondarycustomer ? this.secondarycustomer.pricePaymentTerm : null,
      Validators.required],
      secondaryCustomerGroupDescription: [
        this.secondarycustomer ? this.secondarycustomer.secondaryCustomerGroupDescription : null,
      Validators.required],
      attribute7: [
        this.secondarycustomer ? this.secondarycustomer.attribute7 : null,
      Validators.required],
      tax: [
        this.secondarycustomer ? this.secondarycustomer.tax : null,
      Validators.required],
      rowNumber: [
        this.secondarycustomer ? this.secondarycustomer.rowNumber : null,
      Validators.required],
      imageSecondarycustomer: [
        this.secondarycustomer ? this.secondarycustomer.imageSecondarycustomer : {
        thumbnail: null,
        smallThumbnail: null
      }, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.CompanyCode !== '' &&
      item.CustomerCode !== '') {
      if (item.id !== 0) {
        const update = {
          id: item.id,
          changes: item
        };
        this.store.dispatch(SecondaryCustomerApiActions.updateSECustomerList({ update: update }));
      }
    }
    this.close();
  }
}
