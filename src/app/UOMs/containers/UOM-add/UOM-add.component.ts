import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UOM } from '@app/@core/data';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { UomsActions } from '@app/UOMs/actions';

@Component({
    selector: 'ngx-uom-add',
    templateUrl: './uom-add.component.html',
    styleUrls: ['./uom-add.component.scss'],
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
                this.store.dispatch(UomsActions.updateUom({ update: update }));
            } else {
                this.store.dispatch(UomsActions.addUom({ uom: item }));
                alert('Add new UOM successfully!');
            }
            this.close();
        } else {
            alert('Please fill in necessary field!');
        }
    }
}
