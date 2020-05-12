import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { ProductGroupSelectors } from '@app/product-group/selectors';

@Component({
    selector: 'ngx-product-page',
    template: `
        <nb-card>
            <nb-tabset fullWidth>
                <nb-tab tabTitle="Detail">
                    <ngx-product></ngx-product>
                </nb-tab>
                <nb-tab tabTitle="Product List">
                    <ngx-product-list></ngx-product-list>
                </nb-tab>
            </nb-tabset>
        </nb-card>
    `,
})
export class ProductPageComponent implements OnInit {
    productdetail$;
    groupType$: string;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ProductGroup>,
    ) {
        this.groupType$ = this.router.snapshot.params.groupType;
        this.productdetail$ = this.store.pipe(select(ProductGroupSelectors.selectCurrentProductGroup(this.groupType$)));
    }
    ngOnInit() { }
}
