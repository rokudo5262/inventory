import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SecondaryCustomerSelectors } from '@app/se-customer/selectors';
import { SecondaryCustomerApiActions } from '@app/se-customer/actions';
import { SecondaryCustomerAddComponent } from './add-smart-table-se-customer/add-smart-table-se-customer.component';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'ngx-smart-table-se-customer',
  templateUrl: './smart-table-se-customer.component.html',
  styleUrls: ['./smart-table-se-customer.component.scss'],
})

export class SmartTableSecondaryCustomerComponent implements OnInit {
  settings = {
    selectMode: 'multi',
    mode: 'external',
    columns: {
      secondaryCustomerCode: {
        title: 'Secondary Customer Code',
        type: 'string',
      },
      secondaryCustomerName: {
        title: 'Secondary Customer Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      attribute1: {
        title: 'Traditional Trade',
        type: 'string',
      },
      attribute2: {
        title: 'Modern Trade',
        type: 'string',
      },
      attribute3: {
        title: 'Food Service',
        type: 'string',
      },
      attribute4: {
        title: 'Industial Food Service',
        type: 'string',
      },
      attribute5: {
        title: 'Order',
        type: 'string',
      },
      status: {
        title: 'Status',
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
  secondarycustomers$: Observable<SecondaryCustomer[]>;
  dialogRef: any;
  selectedRows = [];
  selectedStatus = [];
  selectedstatusA = [];
  selectedstatusI = [];
  selectedstatus = [];
  constructor(
    private store: Store<SecondaryCustomer>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.secondarycustomers$ = this.store.pipe(select(SecondaryCustomerSelectors.selectAllSecondaryCustomers));
  }
  ngOnInit() {
    this.store.dispatch(SecondaryCustomerApiActions.getSECustomerLists({ secondarycustomers: [] }));
  }
  secondarycustomershiptoaddress() {
    this.route.navigate(['dashboard/se-customer/SecondaryCustomerShipToAddress']);
  }
  open() {
    this.dialogService.open(SecondaryCustomerAddComponent);
  }
  onCustomAction(event) {
    this.route.navigate(['dashboard/se-customer/secondarycustomer', event.data.id]);
  }
  onUserRowSelect(event) {
    console.log('user row select: ', event);
    this.selectedRows = event.selected.map(x => x.id);
    console.log('selected list: ', this.selectedRows);
    console.log('user row select: ', event);
    this.selectedStatus = event.selected.map(x => x.status === 'Rejected');
    console.log('selected list: ', this.selectedStatus);
    console.log('user row select: ', event);
    this.selectedstatus = event.selected.map(x => x.status === 'new');
    console.log('selected list: ', this.selectedstatus);
    console.log('user row select: ', event);
    this.selectedstatusA = event.selected.map(x => x.status === 'A');
    console.log('selected list: ', this.selectedstatusA);
    console.log('user row select: ', event);
    this.selectedstatusI = event.selected.map(x => x.status === 'I');
    console.log('selected list: ', this.selectedstatusI);
  }
  onClick() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    if (this.selectedstatus) {
      this.store.dispatch(SecondaryCustomerApiActions.removesSECustomerList({ ids: this.selectedRows }));
    } else {
      window.confirm('Only delete when status = new');
    }
  }
  Rejected() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    if (this.selectedstatus) {
      const updates: Update<SecondaryCustomer>[] = [];
      this.selectedRows.forEach(item => updates.push(
        {
          id: item,
          changes: item
        }
      ));
      this.store.dispatch(SecondaryCustomerApiActions.RejectedUpdateSECustomerList({ updates: updates }));
    } else {
      window.confirm('Only Rejected when status = new');
    }
  }
  ReOpen() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    if (this.selectedstatusA) {
      const updates: Update<SecondaryCustomer>[] = [];
      this.selectedRows.forEach(item => updates.push(
        {
          id: item,
          changes: item
        }
      ));
      this.store.dispatch(SecondaryCustomerApiActions.ReOpenSECustomerList({ updates: updates }));
    } else {
      window.confirm('Only ReOpen when status = Rejected ');
    }
  }
  Approved() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    if (this.selectedstatus || this.selectedstatusI) {
      const updates: Update<SecondaryCustomer>[] = [];
      this.selectedRows.forEach(item => updates.push(
        {
          id: item,
          changes: item
        }
      ));
      this.store.dispatch(SecondaryCustomerApiActions.ApprovedSECustomerList({ updates: updates }));
    } else {
      window.confirm('Only Approved when status = new or InActive');
    }
  }
  Deactivate() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    if (this.selectedstatus) {
      const updates: Update<SecondaryCustomer>[] = [];
      this.selectedRows.forEach(item => updates.push(
        {
          id: item,
          changes: item
        }
      ));
      this.store.dispatch(SecondaryCustomerApiActions.DeactivateSECustomerList({ updates: updates }));
    } else {
      window.confirm('Only Deactivate when status = A');
    }
  }
}
