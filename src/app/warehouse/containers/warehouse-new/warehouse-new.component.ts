import { NbDialogRef } from '@nebular/theme';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Warehouse } from '@appdata';
import { WarehousesApiActions } from '@appwarehouse/actions';


@Component({
    selector: 'warehouse-new',
    templateUrl: './warehouse-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
    }
    `],
})
// [disabled]="!item.valid"
export class WarehouseNewComponent implements OnInit {
    public addWarehouseForm: FormGroup;
    public warehouse: Warehouse;
    @Output() response: EventEmitter<any> = new EventEmitter();

    constructor(
        private dialogRef: NbDialogRef<WarehouseNewComponent>,
        private fb: FormBuilder,
        private store: Store<Warehouse>,
    ) {
    }


    ngOnInit() {
       this.createForm();
    }

    createForm = () => {
        this.addWarehouseForm = this.fb.group({
            warehouseName: ['', Validators.required],
            locationId: ['', Validators.required],
            warehouseAddress: ['', Validators.required],
            managerId: ['', Validators.required],
            warehouseCode: ['', Validators.required],
            warehouseStatus: ['active', Validators.required],
            id: [0, Validators.required],
        });
    }
    close() {
        this.dialogRef.close();
      }

    onSubmit(item) {
        if (item.warehouseName !== '' &&
            item.locationId !== '' &&
            item.warehouseAddress !== '' &&
            item.managerId !== '' &&
            item.warehouseCode !== '') {
            this.store.dispatch(WarehousesApiActions.addWarehouse({ warehouse: item }));
        }
        this.close();
    }
}
