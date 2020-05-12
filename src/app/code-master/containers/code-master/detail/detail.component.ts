import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CodeMaster } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { CodeMasterApiActions } from '@app/code-master/actions';

@Component({
    template: ``
})

export class DetailComponent implements OnInit {
    codeMaster$;
    id$: number;

    @Input() codeMaster: CodeMaster;
    constructor(
        private router: ActivatedRoute,
        private store: Store<CodeMaster>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.codeMaster$ = this.store.pipe(select(CodeMasterSelectors.selectCurrentCodeMaster(this.id$)));
    }
    ngOnInit() {
        this.onRefresh();
    }
    onRefresh() {
        this.store.dispatch(CodeMasterApiActions.getCodeMasters());
    }
}
