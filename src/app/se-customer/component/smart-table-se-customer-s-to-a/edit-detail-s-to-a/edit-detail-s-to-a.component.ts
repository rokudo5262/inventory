import { OnInit, Input, Component } from '@angular/core';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SecondaryCustomerstoaEditDialogComponent } from '../edit-detail-s-to-a-dialog/edit-detail-s-to-a-dialog.component';
import { SecondaryCustomerShipToAddressApiActions } from '../../../actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-se-customer-s-to-a-detail-edit',
  templateUrl: 'edit-detail-s-to-a.component.html',
  styles: [`
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }
    `],
})
export class SecondaryCustomerShipToAddressDetailEditComponent implements OnInit {
  @Input() secustomerstoa: SecondaryCustomerShipToAddress;
  constructor(
    private store: Store<SecondaryCustomerShipToAddress>,
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/se-customer/SecondaryCustomerShipToAddress']);
  }
  edit() {
    this.dialogService.open(SecondaryCustomerstoaEditDialogComponent, {
      context: {
        secustomerstoa: this.secustomerstoa
      }
    }).onClose.subscribe(item => {
      if (item.shipToCode !== '') {
        if (item.id !== 0) {
          const update = {
            id: item.id,
            changes: item
          };
          this.store.dispatch(SecondaryCustomerShipToAddressApiActions
            .updateSECustomerStoA({ update: update }));
        }
      }
    });
    // gọi xử lý update ở đây
  }
}
