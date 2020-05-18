import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductGroup } from '@app/@core/data/product-group';
import { AddProductGroupActions } from '@app/product-group/actions';

@Component({
    selector: 'ngx-product-group-add',
    templateUrl: './product-group-add.component.html',
    styleUrls: ['./product-group-add.component.scss'],
})
export class ProductGroupAddComponent implements OnInit {
    @Output() response: EventEmitter<any> = new EventEmitter();
    selectedOption: string;
    printedOption: string;
    public addProductGroupForm: FormGroup;
    public productgroup: ProductGroup;
    constructor(
        private ref: NbDialogRef<ProductGroupAddComponent>,
        private fb: FormBuilder,
        private store: Store<ProductGroup>,
    ) { }
    ngOnInit() {
        this.addForm();
    }
    addForm = () => {
        this.addProductGroupForm = this.fb.group({
            id: [0, Validators.required],
            companyCode: ['', Validators.required],
            productGroupCode: ['', Validators.required],
            customerCode: ['', Validators.required],
            productGroupName: ['', Validators.required],
            groupType: ['', Validators.required],
            description: ['', Validators.required],
            createdBy: ['', Validators.required],
            lastUpdatedBy: ['', Validators.required],
            createdDateTime: ['', Validators.required],
            deleted: [false, Validators.required],
        });
    }
    close() {
        this.ref.close();
    }
    submit(item) {
        if (this.printedOption = this.selectedOption) {
            this.store.dispatch(AddProductGroupActions.addProductGroup({ addProductGroup: item }));
        }
        if (item.productGroupCode !== '' && item.productGroupName !== '' && item.description !== '') {
            this.store.dispatch(AddProductGroupActions.addProductGroup({ addProductGroup: item }));
        }
        this.ref.close();
    }
}
