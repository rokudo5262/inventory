import { OnInit, Input, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { GeneralInformationEditComponent } from '../general-information-dialog/general-information-dialog.component';
import { OtherInformationEditComponent } from '../other-information-dialog/other-information-dialog.component';
import { PropertiesEditComponent } from '../properties-dialog/properties-dialog.component';
import { InvoicePaymentEditComponent } from '../invoice-payment-dialog/invoice-payment-dialog.component';
import { SecondaryCustomerApiActions } from '../../../actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-se-customer-detail-edit',
  templateUrl: 'se-customer-detail.component.html',
  styles: [`
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }
    `],
})
export class SecondaryCustomerDetailEditComponent implements OnInit {
  @Input() secondarycustomer: SecondaryCustomer;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
    private store: Store<SecondaryCustomer>,
  ) { }
  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/se-customer']);
  }
  edit1() {
    this.dialogService.open(GeneralInformationEditComponent, {
      context: {
        secondarycustomer: this.secondarycustomer
      }
    }).onClose.subscribe(item => {
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
    });
    // gọi xử lý update ở đây
  }
  edit2() {
    this.dialogService.open(OtherInformationEditComponent, {
      context: {
        secondarycustomer: this.secondarycustomer
      }
    });
  }
  edit3() {
    this.dialogService.open(PropertiesEditComponent, {
      context: {
        secondarycustomer: this.secondarycustomer
      }
    });
  }
  edit4() {
    this.dialogService.open(InvoicePaymentEditComponent, {
      context: {
        secondarycustomer: this.secondarycustomer
      }
    });
  }
  secondarycustomershiptoaddress() {
    this.route.navigate(['dashboard/se-customer/SecondaryCustomerShipToAddress']);
  }
}
