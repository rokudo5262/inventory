import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { ApplyForCustomer, ApplyForSecondaryCustomer } from '@app/@core/data';
import { ApplyForCustomerSelectors } from '@app/apply-for/selectors/af-customer.selectors';
import { ApplyForCustomerApiActions, ApplyForSecondaryCustomerApiActions } from '@app/apply-for/actions';

@Component({
    selector: 'af-secondary-new',
    templateUrl: 'af-secondary-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 0 5px;
        float: right;
    }
    `],
})

export class ApplySecondaryNewComponent implements OnInit {
    applyForCustomers$: Observable<ApplyForCustomer[]>;
    secondaryForm = new FormControl('');
    public addApplyForSecondaryForm: FormGroup;
    public applyForSecondaryCustomer: ApplyForSecondaryCustomer;
    @Output() reponse: EventEmitter<any> = new EventEmitter();

    secondarySelected: ApplyForCustomer = {
        id: null,
        companyCode: null,
        applyForCode: null,
        applyForCustomerCode: null,
        customerCode: null,
        salesTeamCode: null,
        type: null,
        primaryCustomerHierarchyCode: null,
        primaryCustomerHierarchyLevel: null,
        regionCode: null,
        regionLevel: null,
        source: null,
        createdBy: null,
        createdDateTime: null,
        lastUpdatedBy: null,
        lastUpdatedDateTime: null,
        deleted: null,
        rowVersion: [],
        description: null,
        depotCode: null,
        salesRouteCode: null,
        salesRegionL1: null,
        salesRegionL2: null,
        salesRegionL3: null,
        salesRegionL4: null,
        salesRegionL5: null,
        applyForSecondaryCustomers: [],
    };
    constructor(
        private store: Store<ApplyForCustomer>,
        private dialogRef: NbDialogRef<ApplySecondaryNewComponent>,
        private fb: FormBuilder,
        private storeS: Store<ApplyForSecondaryCustomer>) {
        this.applyForCustomers$ = this.store.pipe(select(ApplyForCustomerSelectors.selectAllApplyForCustomers));

    }
    ngOnInit() {
        this.store.dispatch(ApplyForCustomerApiActions.getApplyForCustomers());
        this.createForm();
    }
    createForm = () => {
        this.addApplyForSecondaryForm = this.fb.group({
            companyCode: ['', Validators.required],
            applyForCode: ['', Validators.required],
            applyForCustomerCode: ['', Validators.required],
            applyForSecondaryCustomerCode: ['', Validators.required],
            customerCode: ['', Validators.required],
            type: ['', Validators.required],
            secondaryCustomerHierarchyCode: ['', Validators.required],
            secondaryCustomerHierarchyLevel: ['', Validators.required],
            secondaryCustomerRegionCode: ['', Validators.required],
            secondaryCustomerRegionLevel: ['', Validators.required],
            secondaryCustomerClass: ['', Validators.required],
            secondaryCustomerGroup: ['', Validators.required],
            secondaryCustomerType: ['', Validators.required],
            secondaryCustomerSegment: ['', Validators.required],
            secondaryCustomerCode: ['', Validators.required],
            source: ['', Validators.required],
            createdBy: ['', Validators.required],
            createdDateTime: ['2020/3/9', Validators.required],
            lastUpdatedBy: ['', Validators.required],
            lastUpdatedDateTime: ['2020/3/9', Validators.required],
            rowVersion: [[], Validators.required],
            secondaryCustomerCategory: ['', Validators.required],
            excludeSecondaryCustomer: [true, Validators.required],
            description: ['', Validators.required],
            parentSecondaryCustomerCode: ['', Validators.required],
            deleted: [false, Validators.required],
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
            item.applyForSecondaryCustomerCode !== '' &&
            item.customerCode !== '' &&
            item.type !== '' &&
            item.secondaryCustomerHierarchyCode !== '' &&
            item.secondaryCustomerHierarchyLevel !== '' &&
            item.secondaryCustomerRegionCode !== '' &&
            item.secondaryCustomerRegionLevel !== '' &&
            item.secondaryCustomerClass !== '' &&
            item.secondaryCustomerGroup !== '' &&
            item.secondaryCustomerType !== '' &&
            item.secondaryCustomerSegment !== '' &&
            item.secondaryCustomerCode !== '' &&
            item.source !== '' &&
            item.secondaryCustomerCategory !== '' &&
            item.description !== '' &&
            item.parentSecondaryCustomerCode !== '' &&
            item.createdBy !== '' &&
            item.createdDateTime !== '' &&
            item.lastUpdatedBy !== '' &&
            item.lastUpdatedDateTime !== '') {
            this.storeS.dispatch(ApplyForSecondaryCustomerApiActions
                .addApplyForSecondaryCustomer({ applyForSecondaryCustomer: item }));
        }
        this.close();
    }
    report() {
    }
}
