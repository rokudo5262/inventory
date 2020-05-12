import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogCustomizeComponent } from '../btn-customize/dialog-customize.component';

@Component({
    selector: 'ngx-dialog-liquidate',
    template: `
    <nb-card>
        <nb-card-header>Liquidate</nb-card-header>
        <nb-card-body>
            <ngx-liquidate-info></ngx-liquidate-info>
            <ngx-liquidate-table></ngx-liquidate-table>
            <ngx-liquidate-auto></ngx-liquidate-auto>
            <div class="button">
                <button class="btn btnReceipt" nbButton status="success" nbTooltip="Create Receipt" nbTooltipPlacement="top"><i class="fas fa-check-square" aria-hidden="true"></i><span>Receipt</span></button>
                <button class="btn btnReceiptPrint" nbButton status="success" nbTooltip="Create Receipt & Print" nbTooltipPlacement="top"><i class="fas fa-check-square" aria-hidden="true"></i><span>Print</span></button>
                <button class="btn btnCancel" nbButton (click)="cancel()" status="danger" nbTooltip="Cancel" nbTooltipPlacement="top"><i class="fas fa-times-circle" aria-hidden="true"></i><span>Cancel</span></button>
            </div>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
        .button {
            float: right;
        }
        .btn {
            width: 100px;
            margin-left: 10px;
        }
        span {
            margin-left: 5px;
        }
        @media screen and (max-width: 575px) {
            .button {
                margin-right: 5px;
            }
        }
    `],
})
export class DialogLiquidateComponent {
    constructor(private dialogRef: NbDialogRef<DialogCustomizeComponent>) { }
    cancel() {
        this.dialogRef.close();
    }
}
