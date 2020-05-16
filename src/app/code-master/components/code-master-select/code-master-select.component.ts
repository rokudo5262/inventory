import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CodeMaster, CodeDetail } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'ngx-code-master-select',
    templateUrl: './code-master-select.component.html',
    styleUrls: ['./code-master-select.component.scss'],
})

export class CodeMasterSelectComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;
    cmForm = new FormControl('');
    cmInfoForm: FormGroup;
    dataSource: Observable<CodeDetail[]>;

    constructor(
        private store: Store<CodeMaster>,
        ) {
        this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));
    }
    ngOnInit() {
    }
    report() {
    }
}
