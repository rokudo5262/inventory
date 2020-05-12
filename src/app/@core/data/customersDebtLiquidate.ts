import { Observable } from 'rxjs';

export interface CustomersDebtLiquidate {
    id: string;
    date: string;
    value: number;
    deposit: number;
    rest: number;
    received: number;
}

export abstract class CustomersDebtLiquidateData {
    abstract getCustomersDebtLiquidateData(): Observable<CustomersDebtLiquidate[]>;
}
