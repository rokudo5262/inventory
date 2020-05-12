import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddProductGroupComponent } from './add-product-group.component';
import { Router } from '@angular/router';
import { ProductGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroupSelectors } from '@app/product-group/selectors';
import { ProductGroupApiActions } from '@app/product-group/actions';

@Component({
    selector: 'ngx-view-product-group',
    templateUrl: './view-product-group.component.html',
    styles: [`
        .row{
            margin: 0 ;
            justify-content: space-between;
        }
        [nbButton] {
            margin: 5px;
        }
    `],
})
export class ViewProductGroupComponent implements OnInit {
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
                // editable: false,
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
        this.dialog.open(AddProductGroupComponent);
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
