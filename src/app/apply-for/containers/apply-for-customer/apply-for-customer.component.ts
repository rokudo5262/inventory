import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { ApplyCustomerNewComponent } from './new/af-customer-new.component';
import { ApplyForCustomer } from '@app/@core/data';
import { ApplyForCustomerSelectors } from '@app/apply-for/selectors';
import { ApplyForCustomerApiActions } from '@app/apply-for/actions';

@Component({
    templateUrl: './apply-for-customer.component.html',
    styles: [`
    .title{
        font-size: 30px;
        margin: auto 0;
    }
    .row{
        margin: 0 ;
        justify-content: space-between;
    }
    button[nbButton]{
        margin: 0 5px;
    }
    `],
})

export class ApplyForCustomerPageComponent implements OnInit {
    applyForCustomers$: Observable<ApplyForCustomer[]>;
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
        actions: {
            add: false,
            edit: false,
            delete: false,
            custom: [{
                name: 'navigateToCustomer',
                title: '<i class="nb-compose"></i>'
            }]
        }
    };

    constructor(
        private dialogService: NbDialogService,
        private store: Store<ApplyForCustomer>,
        private route: Router,
    ) {
        this.applyForCustomers$ = this.store.pipe(select(ApplyForCustomerSelectors.selectAllApplyForCustomers));
    }
    ngOnInit() {
        this.store.dispatch(ApplyForCustomerApiActions.getApplyForCustomers());
    }
    open() {
        this.dialogService.open(ApplyCustomerNewComponent);
    }
    navigateToDetail(event) {
        this.route.navigate(['dashboard/applyfor/applyforcustomer', event.data.id]);
    }
}
