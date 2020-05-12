import { Component, OnInit, Input } from '@angular/core';
import { ApplyForCustomer, ApplyForSecondaryCustomer } from '@appdata';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ApplyForCustomerApiActions, ApplyForSecondaryCustomerApiActions } from '@app/apply-for/actions';
import { Store, select } from '@ngrx/store';
import { ApplyForCustomerSelectors } from '@app/apply-for/selectors/af-customer.selectors';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplyCustomerNewComponent } from '@app/apply-for/containers/apply-for-customer/new/af-customer-new.component';
import { ExclusiveCheckboxComponent } from './exclusive-checkbox.component';

@Component({
    selector: 'ngx-customer-detail',
    templateUrl: './customer-detail.component.html',
    styles: [`
    .title{
        margin: auto 10px;
    }
    span{
        font-size: 30px;
    }
    .row{
        justify-content: space-between;
    }
    button[nbButton]{
        margin-left: 10px;
    }
    `],
})
export class CustomerDComponent implements OnInit {
    public editApplyForCustomerForm: FormGroup;
    @Input() applyForCustomer: ApplyForCustomer;
    @Input() applyForSecondaryCustomer: ApplyForSecondaryCustomer;
    applyForCustomer$;
    id$: number;
    settings = {
        selectMode: 'multi',
        mode: 'inline',
        columns: {
            type: {
                title: 'Type',
                type: 'string',
            },
            secondaryCustomerCode: {
                title: 'Customer Code',
                type: 'string',
            },
            secondaryCustomerCategory: {
                title: 'Customer Category',
                type: 'string',
            },
            secondaryCustomerType: {
                title: 'Customer Type',
                type: 'string',
            },
            secondaryCustomerClass: {
                title: 'Customer Class',
                type: 'string',
            },
            secondaryCustomerGroup: {
                title: 'Customer Class',
                type: 'string',
            },
            excludeSecondaryCustomer: {
                title: 'Exclude Secondary Customer',
                type: 'custom',
                renderComponent: ExclusiveCheckboxComponent,
            },
            description: {
                title: 'Description',
            }
        },
        hideSubCustomer: true,
        actions: false
    };

    data: ApplyForSecondaryCustomer[];

    constructor(
        // private dialogRef: NbDialogRef<ApplyForCustomerEditComponent>,
        private dialogService: NbDialogService,
        private route: Router,
        private fb: FormBuilder,
        private router: ActivatedRoute,
        private store: Store<ApplyForCustomer>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForCustomer$ = this.store.pipe(select(ApplyForCustomerSelectors
            .selectCurrentApplyForCustomer));
    }
    ngOnInit() {
        this.createForm();
        this.data = this.applyForCustomer ? this.applyForCustomer.applyForSecondaryCustomers : [];
    }
    navigateToCustomer() {
        this.route.navigate(['dashboard/applyfor/applyforcustomer']);
    }
    openEdit() {
        // this.dialogService.open(ApplyForCustomerEditComponent, {
        //     context: {
        //         applyForCustomer : this.applyForCustomer
        //     }
        // })
    }
    delete() {
        alert('Are you sure you want to delete ' + this.applyForCustomer.id + '?');
        this.store.dispatch(ApplyForCustomerApiActions.updateDelete({ id: this.applyForCustomer.id }));
    }
    createForm = () => {
        this.editApplyForCustomerForm = this.fb.group({
            companyCode: [this.applyForCustomer ? this.applyForCustomer.companyCode : '',
            Validators.required],
            applyForCode: [this.applyForCustomer ? this.applyForCustomer.applyForCode : '',
            Validators.required],
            applyForCustomerCode: [this.applyForCustomer ? this.applyForCustomer.applyForCustomerCode : '',
            Validators.required],
            customerCode: [this.applyForCustomer ? this.applyForCustomer.customerCode : '',
            Validators.required],
            salesTeamCode: [this.applyForCustomer ? this.applyForCustomer.salesTeamCode : '',
            Validators.required],
            type: this.applyForCustomer ? this.applyForCustomer.type : ['', Validators.required],
            primaryCustomerHierarchyCode: [
                this.applyForCustomer ? this.applyForCustomer.primaryCustomerHierarchyCode : '',
                Validators.required
            ],
            primaryCustomerHierarchyLevel: [
                this.applyForCustomer ? this.applyForCustomer.primaryCustomerHierarchyLevel : '',
                Validators.required
            ],
            regionCode: [this.applyForCustomer ? this.applyForCustomer.regionCode : '',
            Validators.required],
            regionLevel: [this.applyForCustomer ? this.applyForCustomer.regionLevel : '',
            Validators.required],
            source: [this.applyForCustomer ? this.applyForCustomer.source : '',
            Validators.required],
            createdBy: [this.applyForCustomer ? this.applyForCustomer.createdBy : '',
            Validators.required],
            createdDateTime: [
                this.applyForCustomer ? this.applyForCustomer.createdDateTime : '2020/3/9',
                Validators.required
            ],
            lastUpdatedBy: [this.applyForCustomer ? this.applyForCustomer.lastUpdatedBy : '',
            Validators.required],
            lastUpdatedDateTime: [
                this.applyForCustomer ? this.applyForCustomer.lastUpdatedDateTime : '2020/3/9',
                Validators.required
            ],
            rowVersion: [this.applyForCustomer ? this.applyForCustomer.rowVersion : [],
            Validators.required],
            description: [this.applyForCustomer ? this.applyForCustomer.description : '',
            Validators.required],
            deleted: [this.applyForCustomer ? this.applyForCustomer.deleted : false,
            Validators.required],
            depotCode: this.applyForCustomer ? this.applyForCustomer.depotCode : ['',
                Validators.required],
            salesRouteCode: [this.applyForCustomer ? this.applyForCustomer.salesRouteCode : '',
            Validators.required],
            salesRegionL1: [this.applyForCustomer ? this.applyForCustomer.salesRegionL1 : '',
            Validators.required],
            salesRegionL2: [this.applyForCustomer ? this.applyForCustomer.salesRegionL2 : '',
            Validators.required],
            salesRegionL3: [this.applyForCustomer ? this.applyForCustomer.salesRegionL3 : '',
            Validators.required],
            salesRegionL4: [this.applyForCustomer ? this.applyForCustomer.salesRegionL4 : '',
            Validators.required],
            salesRegionL5: [this.applyForCustomer ? this.applyForCustomer.salesRegionL5 : '',
            Validators.required],
            id: [this.applyForCustomer ? this.applyForCustomer.id : 0,
            Validators.required],
        });
    }

    close() {
        this.close();
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
            item.description !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item
                };
                this.store.dispatch(ApplyForCustomerApiActions.updateApplyForCustomer({ update: update }));
            }
        }
        this.close();
    }
    openNew() {
        this.dialogService.open(ApplyCustomerNewComponent);
    }
    selectedRows: [];
    onUserRowSelect(event) {
        this.selectedRows = event.selected.map(x => x.id);
    }
    onDelete() {
        alert('Are you sure you want to delete ' + this.selectedRows + '?');
        this.store.dispatch(ApplyForSecondaryCustomerApiActions.updateDeletes({ ids: this.selectedRows }));
    }
}
