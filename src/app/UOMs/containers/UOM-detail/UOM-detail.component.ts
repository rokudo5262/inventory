import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UOM } from '@app/@core/data';
import { UomSelectors } from '@app/UOMs/selectors/uom.selectors';
import { UomsApiActions } from '@app/UOMs/actions';

@Component({
    template: `
    <ngx-uom-detail [uom]="uom$ | async"></ngx-uom-detail>
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
        this.store.dispatch(UomsApiActions.getUoms({ uoms: [] }));
    }
}
