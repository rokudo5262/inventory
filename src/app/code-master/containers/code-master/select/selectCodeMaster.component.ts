import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CodeMaster, CodeDetail } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'select-code-master',
    templateUrl: './selectCodeMaster.component.html',
})

export class SelectCodeMasterComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;
    cmForm = new FormControl('');
    cmInfoForm: FormGroup;
    // cmSelected: CodeMaster = {
    //     id: null,
    //     companyCode: null,
    //     customerCode:null,
    //     cMcode: null,
    //     cMname: null,
    //     standardName: null,
    //     systemCode: null,
    //     remark: null,
    //     deleted: null,
    //     codeDetails: []
    // }

    dataSource: Observable<CodeDetail[]>;

    constructor(
        private store: Store<CodeMaster>,
        ) {
        this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));
    }
    ngOnInit() {
        // this.store.dispatch(CodeMasterApiActions.getCodeMasters({ codeMasters: [] }));
    }
    report() {
    }
}
