import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { ProductGroupSelectors } from '@app/product-group/selectors';

@Component({
    selector: 'ngx-bundle-group',
    template: `
        <nb-card>
            <nb-tabset fullWidth>
                <nb-tab tabTitle="Detail">
                    <ngx-bundle [bundledetail]="bundledetail$ | async"></ngx-bundle>
                </nb-tab>
                <nb-tab tabTitle="Bundle List">
                    <ngx-bundle-list></ngx-bundle-list>
                </nb-tab>
            </nb-tabset>
        </nb-card>
    `,
})
export class BundleGroupComponent implements OnInit {
    bundledetail$;
    groupType$: string;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ProductGroup>
    ) {
        this.groupType$ = this.router.snapshot.params.groupType;
        this.bundledetail$ = this.store.pipe(select(ProductGroupSelectors.selectCurrentProductGroup(this.groupType$)));
    }
    ngOnInit() { }
}
