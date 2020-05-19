import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IOrder } from '@app/@core/data';
import { OrdersActions } from '@app/orders/actions';

@Component({
  selector: 'ngx-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.scss'],
})
export class OrdersAddComponent implements OnInit {
  public order: IOrder;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store<IOrder>,
    private dialogRef: NbDialogRef<OrdersAddComponent>
  ) { }

  ngOnInit() {
  }
  submit(item) {
    this.store.dispatch(OrdersActions.addOrder({ order: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
