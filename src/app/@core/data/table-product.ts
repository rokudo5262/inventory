import { OrderProduct } from './order-product';

export interface TableProduct {
    tableProducts: OrderProduct[];

}

export const TableProductinitialState: TableProduct = {
    tableProducts: [],
};
