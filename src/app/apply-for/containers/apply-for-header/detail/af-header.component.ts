import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplyForHeader } from '@app/@core/data';
import { ApplyForHeaderSelectors } from '@app/apply-for/selectors/af-header.selectors';
import { ApplyForHeaderApiActions } from '@app/apply-for/actions';

@Component({
    template: `
        <ngx-header-detail [applyForHeader]="applyForHeader$ | async"></ngx-header-detail>
    `
})

export class DetailComponent implements OnInit {
    applyForHeader$;
    id$: number;

    @Input() applyForHeader: ApplyForHeader;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ApplyForHeader>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForHeader$ = this.store.pipe(select(ApplyForHeaderSelectors.selectCurrentApplyForHeader(this.id$)));
    }

    ngOnInit() {
        this.store.dispatch(ApplyForHeaderApiActions.getApplyForHeaders());
    }

}
