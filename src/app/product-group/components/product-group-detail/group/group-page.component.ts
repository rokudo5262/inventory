import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductGroup } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { ProductGroupSelectors } from '@app/product-group/selectors';

@Component({
    selector: 'ngx-bundle-page',
    template: `
        <nb-card>
            <nb-tabset fullWidth>
                <nb-tab tabTitle="Detail">
                    <ngx-group></ngx-group>
                </nb-tab>
                <nb-tab tabTitle="Group List">
                    <ngx-group-list></ngx-group-list>
                </nb-tab>
            </nb-tabset>
        </nb-card>
    `,
})
export class GroupPageComponent implements OnInit {
    groupdetail$;
    groupType$: string;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ProductGroup>
    ) {
        this.groupType$ = this.router.snapshot.params.groupType;
        this.groupdetail$ = this.store.pipe(select(ProductGroupSelectors.selectCurrentProductGroup(this.groupType$)));
    }
    ngOnInit() { }
}
