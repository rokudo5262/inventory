import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UOM } from '@app/@core/data';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { UomsApiActions } from '@app/UOMs/actions';

@Component({
    selector: 'ngx-uom-add',
    template: `
    <nb-card>
        <nb-card-header>Add UOM</nb-card-header>
        <nb-card-body>
            <form [formGroup]="addUOMForm" method="POST">
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Company Code</label>
                    <div class="col-sm-9">
                        <input type="text" name="companyCode" formControlName="companyCode" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">UOM Code</label>
                    <div class="col-sm-9">
                        <input type="text" name="uomCode" formControlName="uomCode" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">UOM Name</label>
                    <div class="col-sm-9">
                        <input type="text" name="uomName" formControlName="uomName" class="form-control" required>
                    </div>
                </div>
            </form>
            <div class="col-sm-9" class="button">
                <button class="btn btnSave" type="button" nbButton status="success" nbTooltip="Save" nbTooltipPlacement="left" (click)="submit(addUOMForm.value)"><i class="fas fa-save"></i><span>Save</span></button>
                <button class="btn btnCancel" type="button" nbButton status="danger" nbTooltip="Cancel" nbTooltipPlacement="right" (click)="close()"><i class="fas fa-times-circle"></i><span>Cancel</span></button>
            </div>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    input {
        width: 100%;
        margin-bottom: 20px;
    }
    .btn {
        margin-left: 10px;
        width: 100px;
    }
    .btn span {
        margin-left: 5px;
    }
    .button {
        float: right;
    }
    `]
})

export class UomAddComponent implements OnInit {
    public addUOMForm: FormGroup;
    public uom: UOM;

    constructor(
        private fb: FormBuilder,
        private store: Store<UOM>,
        private dialogRef: NbDialogRef<UomAddComponent>
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm = () => {
        this.addUOMForm = this.fb.group({
            companyCode: ['', Validators.required],
            uomCode: ['', Validators.required],
            uomName: ['', Validators.required],
            deleted: [false, Validators.required],
            id: [0, Validators.required],
        });
    }

    close() {
        this.dialogRef.close();
    }

    submit(item) {
        if (item.companyCode !== '' &&
            item.uomCode !== '' &&
            item.uomName !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item,
                };
                this.store.dispatch(UomsApiActions.updateUom({ update: update }));

            } else {
                this.store.dispatch(UomsApiActions.addUom({ uom: item }));
                alert('Add new UOM successfully!');
            }
            this.close();
        } else {
            alert('Please fill in necessary field!');
        }
    }
}
