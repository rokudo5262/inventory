import { Component, OnInit } from '@angular/core';
import { CustomersDebtLiquidateData } from '@app/@core/data/customersDebtLiquidate';

@Component({
    selector: 'ngx-liquidate-table',
    template: `
        <ng2-smart-table [settings]="settings" [source]="data">
        </ng2-smart-table>
        <ng-template>
            <div *ngIf="true"></div>
        </ng-template>
    `,
    styles: [`
    `],
})

export class LiquidateTableComponent implements OnInit {

    settings = {
        columns: {
            id: {
                title: 'OrderId',
            },
            date: {
                title: 'Date',
            },
            value: {
                title: 'Order Value',
            },
            deposit: {
                title: 'Deposit',
            },
            rest: {
                title: 'Rest',
            },
            received: {
                title: 'Received',
                type: 'string',
            },
        },
        actions: {
            add: false,
            delete: false,
            edit: false,
        },
        hideSubHeader: true,
    };
    data = [
        {
            id: 'HD01',
            date: '26/01/2018 10:33',
            value: 761200,
            deposit: 340000,
            rest: 421200,
            received: '',
        },
        {
            id: 'HD02',
            date: '26/01/2018 10:33',
            value: 352000,
            deposit: 0,
            rest: 352000,
            received: '',
        },
        {
            id: 'HD03',
            date: '26/01/2018 10:33',
            value: 431200,
            deposit: 0,
            rest: 431200,
            received: '',
        },
    ];
    source: CustomersDebtLiquidateData;
    constructor() {
    }
    ngOnInit() {
    }
}
