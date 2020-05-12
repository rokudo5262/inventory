import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CustomersDebtListData } from '@app/@core/data/customersDebtList';
import { DialogCustomizeComponent } from './btn-customize/dialog-customize.component';
import { DialogLiquidateComponent } from './btn-liquidate/dialog-liquidate.component';

@Component({
    selector: 'ngx-tab-customer-debt',
    template: `
    <ng2-smart-table [settings]="settings" [source]="data">
    </ng2-smart-table>
    <ng-template>
        <div *ngIf="true"></div>
    </ng-template>
    <div class="button">
        <button type="button" class="btn btnCustomize" type="customize" nbButton (click)="customize()" status="success" nbTooltip="Customize" nbTooltipPlacement="top"><i class="fas fa-sync-alt"></i><span>Customize</span></button>
        <button type="button" class="btn btnLiquidate" type="liquidate" nbButton (click)="liquidate()" status="success" nbTooltip="Liquidate" nbTooltipPlacement="top"><i class="fas fa-calculator"></i><span>Liquidate</span></button>
        <button type="button" class="btn btnExport" type="export" nbButton status="danger" nbTooltip="Export" nbTooltipPlacement="top"><i class="fas fa-sign-out-alt"></i><span>Export</span></button>
        <ng-template #dialog1>
            <ngx-dialog-customize></ngx-dialog-customize>
        </ng-template>
        <ng-template #dialog2>
            <ngx-dialog-liquidate></ngx-dialog-liquidate>
        </ng-template>
    </div>
    `,
    styles: [`
    nb-layout-column {
        background-color: white;
    }
    .button {
        float: right;
        margin-top: 16px;
    }
    .btn {
        margin-left: 10px;
        width: 120px;
    }
    .btn span {
        margin-left: 5px;
    }
    @media screen and (max-width: 575px) {
        .button {
            margin-right: 10px;
        }
    }
    @media screen and (max-width: 521px) {
        .btn span {
            display: none;
        }
        .btn {
            width: 40px;
        }
    }
    `]
})

export class TabCustomerDebtComponent implements OnInit {

    settings = {
        columns: {
            id: {
                title: 'OrderId',
            },
            date: {
                title: 'Date',
            },
            type: {
                title: 'Type',
            },
            value: {
                title: 'Value',
            },
            balance: {
                title: 'Balance',
            },
        },
        selectMode: 'multi',
        actions: {
            delete: false,
            add: false,
            edit: false,
            select: true,
        },
        hideSubHeader: true,
    };
    data = [
        {
            id: 'HD01',
            date: '27/02/2018 15:40',
            type: 'Payment',
            value: -350000,
            balance: 0,
        },
        {
            id: 'HD02',
            date: '27/02/2018 15:40',
            type: 'Sale',
            value: 350000,
            balance: 350000,
        },
        {
            id: 'HD03',
            date: '27/02/2018 15:40',
            type: 'Payment',
            value: -350000,
            balance: 0,
        },
    ];
    source: CustomersDebtListData;

    constructor(private dialogService: NbDialogService) { }

    customize() {
        this.dialogService.open(DialogCustomizeComponent);
    }
    liquidate() {
        this.dialogService.open(DialogLiquidateComponent);
    }
    ngOnInit() {
    }
}
