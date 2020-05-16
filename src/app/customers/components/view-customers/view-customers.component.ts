import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ImportCustomersComponent } from './import-customers/import-customers.component';
import { DialogSmsComponent } from './sendMsg-customers/dialog-sms.component';
import { Observable } from 'rxjs';
import { Customer } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { CustomerSelectors } from '@app/customers/selectors';
import { CustomersActions } from '@app/customers/actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'ngx-view-customers',
  template: `
  <nb-card>
    <nb-card-header>
      <p>Customers List</p>
      <div class="button">
        <button class="btn btnAdd" nbButton status="success" nbTooltip="Add New Customer" nbTooltipPlacement="top "[routerLink]="['/dashboard/customers/add-customers']"><i class="fa fa-plus" aria-hidden="true"></i><span>Customer</span></button>
        <div class="dropdown">
          <button class="btn btnMessage" nbButton status="success" nbTooltip="Send Message" nbTooltipPlacement="top"><i class="fa fa-paper-plane" aria-hidden="true"></i><span>Message</span></button>
          <div class="dropdown-content">
          <a nbButton status="success" (click)="sms()"><i class="fas fa-sms"></i><b>SMS</b></a>
            <ng-template #dialog>
              <ngx-dialog-sms></ngx-dialog-sms>
            </ng-template>
          <a nbButton status="success" (click)="email()"><i class="fas fa-envelope"></i><b>Email</b></a>
          <a nbButton status="success" (click)="zalo()"><i class="fas fa-mobile"></i><b>Zalo</b></a>
          </div>
        </div>
        <button class="btn btnImport" nbButton (click)="import()" status="success" nbTooltip="Import File" nbTooltipPlacement="top"><i class="fas fa-sign-in-alt"></i><span>Import</span></button>
        <button class="btn btnExport" nbButton status="success" nbTooltip="Export File" nbTooltipPlacement="top"><i class="fas fa-sign-out-alt" aria-hidden="true"></i><span>Export</span></button>
        <ng-template #dialog>
          <ngx-import-customers></ngx-import-customers>
        </ng-template>
      </div>
    </nb-card-header>
    <nb-card-body>
      <ng2-smart-table [settings]="settings" [source]="customers$ | async" (userRowSelect)="navigateToCustomer($event)"
      (editConfirm)="edit($event)" (deleteConfirm)="delete($event)">
      </ng2-smart-table>
    </nb-card-body>
  </nb-card>
  `,
  styles: [`
  p {
    float: left;
    font-size: 24px;
    margin: 10px 0;
  }
  b {
    margin-left: 5px;
  }
  .button {
    float: right;
  }
  .btn {
    width: 120px;
    margin-left: 10px;
  }
  .btn span {
    margin-left: 5px;
  }
  .btnMessage {
    border: none;
    cursor: pointer;
  }
  .fa-sms, .fa-mobile, .fa-envelope {
    float: left;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    width: 120px;
    margin: 0 0 0 10px;
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    background-color: #2bca86;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #57dba2;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  @media screen and (max-width: 830px) {
    span {
    display: none;
    }
    .btn {
    width: 40px;
    height: 40px;
    }
  }
  @media screen and (max-width: 452px) {
    .button {
    float: left
    }
  }
  .import-checkbox {
    align-items: center;
  }
  nb-checkbox:not(:only-child) {
    margin-right: 1.5rem;
  }
`],
})
export class ViewCustomersComponent implements OnInit {
  @Input() customers: Customer[];
  @Output() customerSelected: EventEmitter<number> = new EventEmitter();
  settings = {
    hideSubHeader: true,
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      currentDebt: {
        title: 'Current Debt',
        type: 'number',
      },
      totalSell: {
        title: 'Total Sell',
        type: 'number',
      },
      totalSellMinusReturns: {
        title: 'Total Sell Minus Returns',
        type: 'number',
      },
    },
  };
  customers$: Observable<Customer[]>;
  dialogRef: any;

  constructor(
    private store: Store<Customer>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.customers$ = this.store.pipe(select(CustomerSelectors.selectAllCustomers));
    this.customers$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(CustomersActions.getCustomers({ customers: [] }));
  }
  import() {
    this.dialogService.open(ImportCustomersComponent);
  }
  sms() {
    this.dialogService.open(DialogSmsComponent);
  }
  navigateToCustomer(event, id: number) {
    this.route.navigate(['dashboard/customers/customer', event.data.id]);
    this.customerSelected.emit(id);
  }
  edit(event) {
    const changes = event.newData;
    const update: Update<Customer> = {
      id: event.data.id,
      changes: changes
    };
    this.store.dispatch(CustomersActions.updateCustomer({ update: update }));
    event.confirm.resolve();
  }
  delete(event) {
    if (window.confirm
      ('Are you sure you want to delete customer' + ' ' + event.data.name + ' ' + event.data.id + '?')
    ) {
      this.store.dispatch(CustomersActions.removeCustomer({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
