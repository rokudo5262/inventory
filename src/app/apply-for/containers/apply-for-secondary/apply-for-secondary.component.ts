import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApplyForSecondaryCustomer } from '@appdata';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { ApplyForSecondaryCustomerApiActions } from '@app/apply-for/actions';
import { ApplyForSecondaryCustomerSelectors } from '@app/apply-for/selectors';
import { ApplySecondaryNewComponent } from './new/af-secondary-new.component';


@Component({
    templateUrl: './apply-for-secondary.component.html',
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

export class ApplyForSecondaryCustomerPageComponent implements OnInit {
    applyForSecondaryCustomers$: Observable<ApplyForSecondaryCustomer[]>;
    settings = {
        selectMode: 'multi',
        mode: 'inline',
        columns: {
            // type: {
            //     title: 'Type',
            //     type: 'string',
            // },
            // secondaryCustomerCode: {
            //     title: 'Customer Code',
            //     type: 'string',
            // },
            // secondaryCustomerCategory: {
            //     title: 'Customer Category',
            //     type: 'string',
            // },
            // secondaryCustomerType: {
            //     title: 'Customer Type',
            //     type: 'string',
            // },
            // secondaryCustomerClass: {
            //     title: 'Customer Class',
            //     type: 'string',
            // },
            // secondaryCustomerGroup: {
            //     title: 'Customer Class',
            //     type: 'string',
            // },
            // createdDateTime: {
            //     title: 'Created Date'
            // },
            // lastUpdatedDateTime: {
            //     title: 'Updated Date'
            // },
            // excludeSecondaryCustomer: {
            //     title: 'Exclude Secondary Customer'
            // },
            // description: {
            //     title: 'Description'
            // }
            applyForCode: {
                title: 'Apply Code'
            }
        },
        hideSubHeader: true,
        actions: {
            add: false,
            edit: false,
            delete: false,
            custom: [{
                name: 'navigateToDetail',
                title: '<i class="nb-compose"></i>',
            }]
        }
    };

    constructor(
        private dialogService: NbDialogService,
        private store: Store<ApplyForSecondaryCustomer>,
        private route: Router,
    ) {
        this.applyForSecondaryCustomers$ = this.store.pipe(select(ApplyForSecondaryCustomerSelectors
            .selectAllApplyForSecondaryCustomers));
    }
    ngOnInit() {
        this.store.dispatch(ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomers());
    }
    open() {
        this.dialogService.open(ApplySecondaryNewComponent);
    }
    navigateToDetail(event) {
        this.route.navigate(['dashboard/applyfor/applyforsecondarycustomer', event.data.id]);
    }
}
