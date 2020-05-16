import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CodeMaster } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { CodeMasterActions } from '@app/code-master/actions';

@Component({
    selector: 'ngx-code-master-detail',
    templateUrl: './code-master-detail.component.html',
    styleUrls: ['./code-master-detail.component.scss'],
})

export class CodeMasterDetailComponent implements OnInit {
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
        this.store.dispatch(CodeMasterActions.getCodeMasters());
    }
}
