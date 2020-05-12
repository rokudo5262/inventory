import { Component, OnInit, Input } from '@angular/core';
import { ApplyForSecondaryCustomer } from '@appdata';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplyForSecondaryCustomerApiActions } from '@app/apply-for/actions';
import { Store, select } from '@ngrx/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplyForSecondaryCustomerSelectors } from '@app/apply-for/selectors';

@Component({
    selector: 'ngx-secondary-detail',
    templateUrl: './secondary-detail.component.html',
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
export class SecondaryCustomerDComponent implements OnInit {
    public editApplyForSecondaryCustomerForm: FormGroup;
    @Input() applyForSecondaryCustomer: ApplyForSecondaryCustomer;
    applyForSecondaryCustomer$;
    id$: number;
    constructor(
        private route: Router,
        private fb: FormBuilder,
        private router: ActivatedRoute,
        private store: Store<ApplyForSecondaryCustomer>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForSecondaryCustomer$ = this.store.pipe(select(ApplyForSecondaryCustomerSelectors
            .selectCurrentApplyForSecondaryCustomer));
    }
    ngOnInit() {
        this.createForm();
    }
    navigateToSecondaryCustomer() {
        this.route.navigate(['dashboard/applyfor/applyforsecondarycustomer']);
    }

    delete() {
        alert('Are you sure you want to delete ' + this.applyForSecondaryCustomer.id + '?');
        this.store.dispatch(ApplyForSecondaryCustomerApiActions
            .updateDelete({ id: this.applyForSecondaryCustomer.id }));
    }
    createForm = () => {
        this.editApplyForSecondaryCustomerForm = this.fb.group({
            companyCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.companyCode : '',
                Validators.required
            ],
            applyForCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.applyForCode : '',
                Validators.required
            ],
            applyForCustomerCode:
                [this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.applyForCustomerCode : '',
                Validators.required
                ],
            applyForSecondaryCustomerCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.applyForSecondaryCustomerCode : '',
                Validators.required
            ],
            customerCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.customerCode : '',
                Validators.required],
            type: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.type : '',
                Validators.required
            ],
            secondaryCustomerHierarchyCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerHierarchyCode : '',
                Validators.required
            ],
            secondaryCustomerHierarchyLevel: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerHierarchyLevel : '',
                Validators.required
            ],
            secondaryCustomerRegionCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerRegionCode : '',
                Validators.required
            ],
            secondaryCustomerRegionLevel: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerRegionLevel : '',
                Validators.required
            ],
            secondaryCustomerClass: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerClass : '',
                Validators.required
            ],
            secondaryCustomerGroup: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerGroup : '',
                Validators.required
            ],
            secondaryCustomerType: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerType : '',
                Validators.required
            ],
            secondaryCustomerSegment: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerSegment : '',
                Validators.required
            ],
            secondaryCustomerCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerCode : '',
                Validators.required
            ],
            source: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.source : '',
                Validators.required
            ],
            createdBy: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.createdBy : '',
                Validators.required
            ],
            createdDateTime: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.createdDateTime : '2020/3/9',
                Validators.required
            ],
            lastUpdatedBy: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.lastUpdatedBy : '',
                Validators.required
            ],
            lastUpdatedDateTime: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.lastUpdatedDateTime : '2020/3/9',
                Validators.required
            ],
            rowVersion: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.rowVersion : [],
                Validators.required
            ],
            description: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.description : '',
                Validators.required
            ],
            deleted: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.deleted : false,
                Validators.required
            ],
            secondaryCustomerCategory: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.secondaryCustomerCategory : '',
                Validators.required
            ],
            excludeSecondaryCustomer: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.excludeSecondaryCustomer : true,
                Validators.required
            ],
            parentSecondaryCustomerCode: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.parentSecondaryCustomerCode : '',
                Validators.required
            ],
            id: [
                this.applyForSecondaryCustomer ? this.applyForSecondaryCustomer.id : 0,
                Validators.required
            ],
        });
    }

    close() {
        this.close();
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
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item
                };
                this.store.dispatch(ApplyForSecondaryCustomerApiActions
                    .updateApplyForSecondaryCustomer({ update: update }));
            }
        }
        this.close();
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
