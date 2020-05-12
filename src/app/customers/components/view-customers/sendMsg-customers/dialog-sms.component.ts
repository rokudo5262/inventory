import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'ngx-dialog-sms',
    template: `
    <nb-card>
        <nb-card-header>Send SMS</nb-card-header>
        <nb-card-body>
            <form>
                <div class="form-group row">
                    <label for="inputTrademark  " class="label col-sm-3 col-form-label">Trademark</label>
                    <div class="col-sm-9">
                        <nb-select selected="1" fullWidth>
                            <nb-option value="1">Trademark 1</nb-option>
                            <nb-option value="2">Trademark 2</nb-option>
                            <nb-option value="3">Trademark 3</nb-option>
                        </nb-select>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputReceiver" class="label col-sm-3 col-form-label">Receiver</label>
                    <div class="col-sm-9">
                        <input type="text" nbInput fullWidth id="receiver" disabled>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTitle" class="label col-sm-3 col-form-label">Title</label>
                    <div class="col-sm-9">
                        <input type="text" nbInput fullWidth id="title" disabled>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputContent" class="label col-sm-3 col-form-label">Content</label>
                    <div class="col-sm-9">
                        <input type="text" nbInput fullWidth id="content" disabled>
                    </div>
                </div>
            </form>
            <div class="button">
                <button class="btn btnSend" nbButton status="success" nbTooltip="Send" nbTooltipPlacement="top"><i class="fas fa-check-square" aria-hidden="true"></i><span>Send</span></button>
                <button class="btn btnSave" nbButton status="success" nbTooltip="Save" nbTooltipPlacement="top"><i class="fas fa-check-square" aria-hidden="true"></i><span>Save</span></button>
                <button class="btn btnCancel" nbButton (click)="cancel()" status="danger" nbTooltip="Cancel" nbTooltipPlacement="top"><i class="fas fa-times-circle" aria-hidden="true"></i><span>Cancel</span></button>
            </div>

        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    `],
})
export class DialogSmsComponent implements OnInit {
    constructor(private dialogRef: NbDialogRef<DialogSmsComponent>) { }
    cancel() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
