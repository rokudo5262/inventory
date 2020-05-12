import { Observable } from 'rxjs';

export interface CustomersDebtList {
    id: string;
    date: string;
    type: string;
    value: number;
    balance: number;
}

export abstract class CustomersDebtListData {
    abstract getCustomersDebtListData(): Observable<CustomersDebtList[]>;
}
