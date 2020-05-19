import { createReducer, on } from '@ngrx/store';
import { OrdersActions, OrdersApiActions } from '../actions';
import { orderInitialState, orderAdapter } from '../states';

export const ordersFeatureKey = 'orders';

export const reducer = createReducer(
    orderInitialState,
    on(
        OrdersActions.loadOrders,
        OrdersApiActions.loadOrdersSuccess,
        (state, { orders }) => {
            orders = orders.filter(x => x.deleted === false);
            return orderAdapter.addMany(orders, state);
        }
    ),
    on(
        OrdersActions.addOrder,
        OrdersApiActions.addOrderSuccess,
        (state, { order }) => orderAdapter.addOne(order, state),
    ),
    on(
        OrdersActions.updateOrder,

        (state, { update }) => orderAdapter.updateOne(update, state),
    ),
    on(
        OrdersActions.deleteOrder,
        (state, { update }) => orderAdapter.updateOne(update, state),
    ),
);
