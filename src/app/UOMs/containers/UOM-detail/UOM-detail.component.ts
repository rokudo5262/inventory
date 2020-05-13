import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UOM } from '@app/@core/data';
import { UomSelectors } from '@app/UOMs/selectors/uom.selectors';
import { UomsActions } from '@app/UOMs/actions';

@Component({
    selector: 'ngx-uom-detail',
    template: `
    <ngx-uom-review [uom]="uom$ | async"><ngx-uom-review>
    `
})

export class UomDetailComponent implements OnInit {
    uom$;
    id$: number;
    constructor(
        private router: ActivatedRoute,
        private store: Store<UOM>
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.uom$ = this.store.pipe(select(UomSelectors.selectCurrentUom(this.id$)));
    }
    ngOnInit() {
        this.store.dispatch(UomsActions.getUoms({ uoms: [] }));
    }
}
