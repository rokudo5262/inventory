import { Component, OnInit, Input } from '@angular/core';
import { ApplyForCustomer, ApplyForHeader } from '@appdata';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ApplyForHeaderApiActions, ApplyForCustomerApiActions } from '@app/apply-for/actions';
import { Store, select } from '@ngrx/store';
import { ApplyForCustomerSelectors } from '@app/apply-for/selectors/af-customer.selectors';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplyCustomerNewComponent } from '@app/apply-for/containers/apply-for-customer/new/af-customer-new.component';

@Component({
    selector: 'ngx-header-detail',
    templateUrl: './header-detail.component.html',
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
    .afheader{
        margin: 0 10px;
    }
    `],
})
export class HeaderDetailComponent implements OnInit {
    public editApplyForHeaderForm: FormGroup;
    @Input() applyForHeader: ApplyForHeader;
    @Input() applyForCustomer: ApplyForCustomer;
    applyForHeader$;
    id$: number;
    settings = {
        selectMode: 'multi',
        mode: 'inline',
        columns: {
            type: {
                title: 'Type',
                type: 'string',
            },
            salesRegionL1: {
                title: 'Branch Code',
                type: 'string',
            },
            salesRegionL2: {
                title: 'Area Code',
                type: 'string',
            },
            salesRegionL3: {
                title: 'Province Code',
                type: 'string',
            },
            salesRegionL4: {
                title: 'Ship To Code',
                type: 'string',
            },

        },
        hideSubHeader: true,
        actions: false
    };

    data: ApplyForCustomer[];

    constructor(
        // private dialogRef: NbDialogRef<ApplyForHeaderEditComponent>,
        private dialogService: NbDialogService,
        private route: Router,
        private fb: FormBuilder,
        private router: ActivatedRoute,
        private store: Store<ApplyForHeader>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForHeader$ = this.store.pipe(select(ApplyForCustomerSelectors.selectCurrentApplyForCustomer));
    }
    ngOnInit() {
        this.createForm();
        this.data = this.applyForHeader ? this.applyForHeader.applyForCustomers : [];
    }
    navigateToHeader() {
        this.route.navigate(['dashboard/applyfor/applyforheader']);
    }
    openEdit() {
        // this.dialogService.open(ApplyForHeaderEditComponent, {
        //     context: {
        //         applyForHeader : this.applyForHeader
        //     }
        // })
    }
    delete() {
        alert('Are you sure you want to delete ' + this.applyForHeader.id + '?');
        this.store.dispatch(ApplyForHeaderApiActions.updateDelete({ id: this.applyForHeader.id }));
    }
    createForm = () => {
        this.editApplyForHeaderForm = this.fb.group({
            companyCode: [this.applyForHeader ? this.applyForHeader.companyCode : '',
            Validators.required],
            applyForCode: [this.applyForHeader ? this.applyForHeader.applyForCode : '',
            Validators.required],
            customerCode: [this.applyForHeader ? this.applyForHeader.customerCode : '',
            Validators.required],
            applyForName: [this.applyForHeader ? this.applyForHeader.applyForName : '',
            Validators.required],
            applyForType: this.applyForHeader ? this.applyForHeader.applyForType : ['',
            Validators.required],
            description: [this.applyForHeader ? this.applyForHeader.description : '',
            Validators.required],
            remark: [this.applyForHeader ? this.applyForHeader.remark : '',
            Validators.required],
            status: [this.applyForHeader ? this.applyForHeader.status : 'Active',
            Validators.required],
            source: [this.applyForHeader ? this.applyForHeader.source : '',
            Validators.required],
            createdBy: [this.applyForHeader ? this.applyForHeader.createdBy : '',
            Validators.required],
            createdDateTime: [this.applyForHeader ? this.applyForHeader.createdDateTime : '2020/3/9',
            Validators.required],
            lastUpdatedBy: [this.applyForHeader ? this.applyForHeader.lastUpdatedBy : '',
            Validators.required],
            lastUpdatedDateTime: [this.applyForHeader ? this.applyForHeader.lastUpdatedDateTime : '2020/3/9',
            Validators.required],
            rowVersion: [this.applyForHeader ? this.applyForHeader.rowVersion : [],
            Validators.required],
            deleted: [this.applyForHeader ? this.applyForHeader.deleted : false,
            Validators.required],
            id: [this.applyForHeader ? this.applyForHeader.id : 0,
            Validators.required],
        });
    }

    close() {
        this.close();
    }

    onSubmit(item) {
        if (item.companyCode !== '' &&
            item.applyForCode !== '' &&
            item.customerCode !== '' &&
            item.applyForName !== '' &&
            item.applyForType !== '' &&
            item.description !== '' &&
            item.remark !== '' &&
            item.status !== '' &&
            item.source !== '' &&
            item.createdBy !== '' &&
            item.createdDateTime !== '' &&
            item.lastUpdatedBy !== '' &&
            item.lastUpdatedDateTime !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item
                };
                this.store.dispatch(ApplyForHeaderApiActions.updateApplyForHeader({ update: update }));

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
        this.store.dispatch(ApplyForCustomerApiActions.updateDeletes({ ids: this.selectedRows }));
    }
}
