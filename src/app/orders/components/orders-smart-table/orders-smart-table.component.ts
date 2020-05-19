import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { OrdersAddComponent } from '../orders-add/orders-add.component';
import { IOrder } from '@app/@core/data';
import { OrdersSelector } from '@app/orders/selectors';
import { OrdersActions } from '@app/orders/actions';
@Component({
  selector: 'ngx-orders-smart-table',
  templateUrl: './orders-smart-table.component.html',
  styleUrls: ['./orders-smart-table.component.scss'],

})
export class OrdersSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    // edit: {
    //   editButtonContent: '<i class="nb-compose"></i>',
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',,
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      orderCode: {
        title: 'Order Code',
        filter: true,
        type: 'number',
        editable: false,
      },
      customerCode: {
        title: 'Customer Code',
        type: 'string',
        editable: true,
      },
      staffCode: {
        title: 'Staff Code',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    }
  };
  orders$: Observable<IOrder[]>;
  dialogRef: any;
  constructor(
    private store: Store<IOrder>,
    private dialogService: NbDialogService,
  ) {
    this.orders$ = this.store.pipe(select(OrdersSelector.selectAllOrders));
    this.orders$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.store.dispatch(OrdersActions.loadOrders({ orders: [] }));
}
  open() {
    this.dialogService.open(OrdersAddComponent);
  }
}
