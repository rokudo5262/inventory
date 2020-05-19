import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IOrder } from '@app/@core/data';


export interface OrdersState extends EntityState<IOrder> {
  selectedOrderID: number | null;
}
export const orderAdapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>({
  selectId: (order: IOrder) => order.orderCode,
  sortComparer: null,
});

export const orderInitialState: OrdersState = orderAdapter.getInitialState({
  selectedOrderID: null,
  entities: {
    0: { },
  },
});
