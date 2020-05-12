import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { ApplyForCustomer, ApplyForHeader } from '@app/@core/data';
import { ApplyForCustomerApiActions, ApplyForHeaderApiActions } from '@app/apply-for/actions';
import { ApplyForHeaderSelectors } from '@app/apply-for/selectors/af-header.selectors';

@Component({
    selector: 'af-customer-new',
    templateUrl: './af-customer-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
    }
    `],
})

export class ApplyCustomerNewComponent implements OnInit {
    applyForHeaders$: Observable<ApplyForHeader[]>;
    customerForm = new FormControl('');
    public addApplyCustomerForm: FormGroup;
    public applyForCustomer: ApplyForCustomer;
    @Output() reponse: EventEmitter<any> = new EventEmitter();

    headerSelected: ApplyForHeader = {
        id: null,
        companyCode: null,
        applyForCode: null,
        customerCode: null,
        applyForName: null,
        applyForType: null,
        description: null,
        remark: null,
        status: null,
        source: null,
        createdBy: null,
        createdDateTime: null,
        lastUpdatedBy: null,
        lastUpdatedDateTime: null,
        deleted: null,
        rowVersion: [],
        applyForCustomers: [],
    };
    constructor(
        private store: Store<ApplyForHeader>,
        private dialogRef: NbDialogRef<ApplyCustomerNewComponent>,
        private fb: FormBuilder,
        private storeC: Store<ApplyForCustomer>) {
        this.applyForHeaders$ = this.store.pipe(select(ApplyForHeaderSelectors.selectAllApplyForHeaders));
    }

    ngOnInit() {
        this.store.dispatch(ApplyForHeaderApiActions.getApplyForHeaders());
        this.createForm();
    }
    createForm = () => {
        this.addApplyCustomerForm = this.fb.group({
            companyCode: ['', Validators.required],
            applyForCode: ['', Validators.required],
            applyForCustomerCode: ['', Validators.required],
            customerCode: ['', Validators.required],
            salesTeamCode: ['', Validators.required],
            type: ['', Validators.required],
            primaryCustomerHierarchyCode: ['', Validators.required],
            primaryCustomerHierarchyLevel: ['', Validators.required],
            regionCode: ['', Validators.required],
            regionLevel: ['', Validators.required],
            source: ['', Validators.required],
            createdBy: ['', Validators.required],
            createdDateTime: ['2020/3/9', Validators.required],
            lastUpdatedBy: ['', Validators.required],
            lastUpdatedDateTime: ['2020/3/9', Validators.required],
            rowVersion: [[], Validators.required],
            description: ['', Validators.required],
            deleted: [false, Validators.required],
            depotCode: ['', Validators.required],
            salesRouteCode: ['', Validators.required],
            salesRegionL1: ['', Validators.required],
            salesRegionL2: ['', Validators.required],
            salesRegionL3: ['', Validators.required],
            salesRegionL4: ['', Validators.required],
            salesRegionL5: ['', Validators.required],
            id: [0, Validators.required],
        });
    }
    close() {
        this.dialogRef.close();
    }

    onSubmit(item) {
        if (item.companyCode !== '' &&
            item.applyForCode !== '' &&
            item.applyForCustomerCode !== '' &&
            item.customerCode !== '' &&
            item.salesTeamCode !== '' &&
            item.type !== '' &&
            item.primaryCustomerHierarchyCode !== '' &&
            item.primaryCustomerHierarchyLevel !== '' &&
            item.regionCode !== '' &&
            item.regionLevel !== '' &&
            item.source !== '' &&
            item.createdBy !== '' &&
            item.createdDateTime !== '' &&
            item.lastUpdatedBy !== '' &&
            item.lastUpdatedDateTime !== '' &&
            item.depotCode !== '' &&
            item.salesRouteCode !== '' &&
            item.salesRegionL1 !== '' &&
            item.salesRegionL2 !== '' &&
            item.salesRegionL3 !== '' &&
            item.salesRegionL4 !== '' &&
            item.salesRegionL5 !== '' &&
            item.description !== ''
        ) {
            this.storeC.dispatch(ApplyForCustomerApiActions.addApplyForCustomer({ applyForCustomer: item }));
        }
        this.close();
    }
}
