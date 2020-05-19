import { createSelector } from '@ngrx/store';
import { selectOrdersState } from './orders-features.selector';
import { OrdersReducer } from '../reducers';
import { orderAdapter } from '../states';

export const selectOrderEntitiesState = createSelector(
  selectOrdersState,
  state => state[OrdersReducer.ordersFeatureKey],
);

export const {
  selectIds: selectOrderIds,
  selectEntities: selectOrderEntities,
  selectAll: selectAllOrders,
  selectTotal: selectTotalOrders,
} = orderAdapter.getSelectors(selectOrderEntitiesState);

export const OrdersSelector = {
  selectOrderEntitiesState,
  selectOrderIds,
  selectOrderEntities,
  selectAllOrders,
  selectTotalOrders,
};
export const selectCurrentOrder = (orderCode) => createSelector(
  selectOrderEntities,
  (order) => order[orderCode]
);
