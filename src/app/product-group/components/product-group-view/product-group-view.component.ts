import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { ProductGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroupSelectors } from '@app/product-group/selectors';
import { ProductGroupApiActions } from '@app/product-group/actions';
import { ProductGroupAddComponent } from '../product-group-add/product-group-add.component';

@Component({
    selector: 'ngx-product-group-view',
    templateUrl: './product-group-view.component.html',
    styleUrls: ['./product-group-view.component.scss'],
})
export class ProductGroupViewComponent implements OnInit {
    settings = {
        hideSubHeader: false,
        actions: {
            add: false,
            edit: false,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            groupType: {
                title: 'Group Type',
                type: 'string',
                width: '15%',
            },
            productGroupCode: {
                title: 'Product Group Code',
                type: 'string',
                width: '20%',
            },
            description: {
                title: 'Descriptions',
                type: 'string',
                width: '65%',
            },
        },
    };
    productgroup$: Observable<ProductGroup[]>;
    constructor(
        private store: Store<ProductGroup[]>,
        private dialog: NbDialogService,
        private route: Router,
    ) {
        this.productgroup$ = this.store.pipe(select(ProductGroupSelectors.selectAllProductGroup));
        this.productgroup$.subscribe(g => console.log(g.length));
    }
    ngOnInit() {
        this.store.dispatch(ProductGroupApiActions.getProductGroups({ productgroups: [] }));
    }
    navigateToProductGroupDetail(event) {
        this.route.navigate(['dashboard/product-group/product-group', event.data.groupType]);
    }
    open() {
        this.dialog.open(ProductGroupAddComponent);
    }
    delete(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            this.store.dispatch(ProductGroupApiActions.removeProductGroup({ id: event.id }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
