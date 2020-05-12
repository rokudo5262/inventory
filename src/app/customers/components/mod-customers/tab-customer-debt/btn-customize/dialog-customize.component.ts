import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'ngx-dialog-customize',
    template: `
    <nb-card>
        <nb-card-header>Customize</nb-card-header>
        <nb-card-body>
            <form>
                <div class="form-group row">
                    <label for="inputCurrentDebt" class="label col-sm-4 col-form-label">Current Debt</label>
                    <div class="col-sm-8">
                    <input type="text" nbInput fullWidth id="inputCurrentDebt" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputCustomizeDate" class="label col-sm-4 col-form-label">Customize Date</label>
                    <div class="col-sm-8">
                    <input nbInput fullWidth
                        [nbDatepicker]="formpicker">
                    <nb-datepicker #formpicker></nb-datepicker>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputCustomizeValue" class="label col-sm-4 col-form-label">Customize Value</label>
                    <div class="col-sm-8">
                    <input type="text" nbInput fullWidth id="inputCustomizeValue">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputDescription" class="label col-sm-4 col-form-label">Description</label>
                    <div class="col-sm-8">
                    <textarea type="textarea" nbInput fullWidth id="inputDescription" rows="5"></textarea>
                    </div>
                </div>
            </form>
            <div class="button">
                <button class="btn btnUpdate" nbButton status="success" nbTooltip="Update" nbTooltipPlacement="top"><i class="fas fa-check-square" aria-hidden="true"></i><span>Update</span></button>
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
export class DialogCustomizeComponent implements OnInit {
    constructor(private dialogRef: NbDialogRef<DialogCustomizeComponent>) { }

    cancel() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
