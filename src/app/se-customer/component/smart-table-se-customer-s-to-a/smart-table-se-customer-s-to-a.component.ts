import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { SecondaryCustomerShipToAddressSelectors } from '@app/se-customer/selectors';
import { SecondaryCustomerShipToAddressApiActions } from '@app/se-customer/actions';
import { SecondaryCustomerstoaAddComponent } from './add-s-to-a/add-s-to-a.component';

@Component({
  selector: 'ngx-smart-table-se-customer-s-to-a',
  templateUrl: './smart-table-se-customer-s-to-a.componet.html',
  styleUrls: ['./smart-table-se-customer-s-to-a.componet.scss'],
})

export class SmartTableSecondaryCustomerShipToAddressComponent implements OnInit {
  settings = {
    selectMode: 'multi',
    mode: 'external',
    columns: {
      shipToCode: {
        title: 'Ship To Code',
        type: 'string',
      },
      shipToName: {
        title: 'Name Ship To Name',
        type: 'string',
      },
      shipToAddress: {
        title: 'Ship To Address',
        type: 'string',
      },
      contact: {
        title: 'Contact',
        type: 'string',
      },
      deliveryCondition: {
        title: 'Delivery Condition',
        type: 'string',
      },
      deliveryTime: {
        title: 'Delivery Time',
        type: 'string',
      },
      otherRequest: {
        title: 'Other Request',
        type: 'string',
      },
      attachedDocument: {
        title: 'Attached Document',
        type: 'string',
      },
    },
    hideSubHeader: false,
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
      // show: false,
      // position: 'left',
    },
  };
  secustomerstoas$: Observable<SecondaryCustomerShipToAddress[]>;
  dialogRef: any;
  selectedRows = [];
  constructor(
    private store: Store<SecondaryCustomerShipToAddress>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.secustomerstoas$ = this.store.pipe(select(SecondaryCustomerShipToAddressSelectors
      .selectAllSecondaryCustomerShipToAddresss));
  }
  ngOnInit() {
    this.store.dispatch(SecondaryCustomerShipToAddressApiActions
      .getSECustomerStoAs({ secustomerstoas: [] }));
  }
  secondarycustomer() {
    this.route.navigate(['dashboard/se-customer']);
  }
  open() {
    this.dialogService.open(SecondaryCustomerstoaAddComponent);
  }
  onCustomAction(event) {
    this.route.navigate(['dashboard/se-customer/SecondaryCustomerShipToAddress', event.data.id]);
  }
  onUserRowSelect(event) {
    console.log('user row select: ', event); this.selectedRows = event.selected.map(x => x.id);
    console.log('selected list: ', this.selectedRows);
  }
  onClick() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    this.store.dispatch(SecondaryCustomerShipToAddressApiActions
      .removesSECustomerStoA({ ids: this.selectedRows }));
  }
}
