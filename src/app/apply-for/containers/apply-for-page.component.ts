import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApplyHeaderNewComponent } from './apply-for-header/new/af-header-new.component';
import { ApplyForHeader } from '@app/@core/data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplyForHeaderSelectors } from '../selectors/af-header.selectors';
import { ApplyForHeaderApiActions } from '../actions';
import { Router } from '@angular/router';


@Component({
    templateUrl: './apply-for-page.component.html',
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

export class ApplyForHeaderPageComponent implements OnInit {
    applyForHeaders$: Observable<ApplyForHeader[]>;

    settings = {
        selectMode: 'multi',
        mode: 'inline',
        columns: {
            applyForCode: {
                title: 'Apply Code',
                type: 'string',
            },
            applyForName: {
                title: 'Description',
                type: 'string',
            },
            createdDateTime: {
                title: 'Created Date'
            },
            lastUpdatedDateTime: {
                title: 'Updated Date'
            },
            status: {
                title: 'Status'
            }
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
        private store: Store<ApplyForHeader>,
        private route: Router,
    ) {
        this.applyForHeaders$ = this.store.pipe(select(ApplyForHeaderSelectors.selectAllApplyForHeaders));
    }
    ngOnInit() {
        this.store.dispatch(ApplyForHeaderApiActions.getApplyForHeaders());
    }
    open() {
        this.dialogService.open(ApplyHeaderNewComponent);
    }
    navigateToDetail(event) {
        this.route.navigate(['dashboard/applyfor/applyforheader', event.data.id]);
    }
}
