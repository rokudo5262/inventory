import { Observable } from 'rxjs';

export interface CustomersList {
    id: string;
    name: string;
    phone: string;
    currentDebt: number;
    totalSell: number;
    totalSellMinusReturns: number;
}

export abstract class CustomersListData {
    abstract getCustomersListData(): Observable<CustomersList[]>;
}
