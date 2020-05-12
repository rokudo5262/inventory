import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductGroup } from '@app/@core/data';
import { Store } from '@ngrx/store';
import { AddProductGroupActions } from '@app/product-group/actions';

@Component({
    selector: 'ngx-add-product-group',
    templateUrl: './add-product-group.component.html',
    styles: [`
        input {
            width: 100%;
            margin-bottom: 20px;
        }
        nb-select.size-medium {
            margin: 0 10 10 10 !important;
        }
        button[nbButton]{
            display: block;
            float: right;
            margin-left: 15px;
        }
    `],
})
export class AddProductGroupComponent implements OnInit {
    @Output() response: EventEmitter<any> = new EventEmitter();
    selectedOption: string;
    printedOption: string;
    // options = [
    //     {name: 'Bundle', value: 1},
    //     {name: 'Group', value: 2},
    //     {name: 'Product', value: 3},
    // ];
    public addProductGroupForm: FormGroup;
    public productgroup: ProductGroup;
    constructor(
        private ref: NbDialogRef<AddProductGroupComponent>,
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
