import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeMaster, CodeDetail } from '@app/@core/data';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CodeMasterSelectors } from '@app/code-master/selectors/code-master.selectors';
import { CodeMasterApiActions, CodeDetailApiActions } from '@app/code-master/actions';
import { NbDialogRef } from '@nebular/theme';
import { CodeMasterNewComponent } from '../../code-master/new-cm/cm-new.component';

@Component({
    selector: 'cm-new',
    templateUrl: 'cd-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 0 5px;
        float: right;
    }
    `],
})

export class CodeDetailNewComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;
    cmForm = new FormControl('');
    cmInfoForm: FormGroup;
    public addCodeDetailForm: FormGroup;
    public codeDetail: CodeDetail;
    @Output() reponse: EventEmitter<any> = new EventEmitter();

// cmSelected: CodeMaster = {
    //     id: null,
    //     companyCode: null,
    //     cMcode: null,
    //     cMname: null,
    //     standardName: null,
    //     systemCode: null,
    //     remark: null,
    //     deleted: null,
    //     codeDetails: []
    // }
    constructor(
        private store: Store<CodeMaster>,
        private dialogRef: NbDialogRef<CodeMasterNewComponent>,
        private fb: FormBuilder,
        private storeD: Store<CodeDetail>,
        ) {
        this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));
    }
    ngOnInit() {
        this.store.dispatch(CodeMasterApiActions.getCodeMasters());
        this.createForm();
    }
    createForm = () => {
        this.addCodeDetailForm = this.fb.group({
            companyCode: ['', Validators.required],
            cMCode: ['', Validators.required],
            cdCode: ['', Validators.required],
            cdName: ['', Validators.required],
            standardName: ['', Validators.required],
            customerCode: ['', Validators.required],
            remark: ['', Validators.required],
            deleted: [false, Validators.required],
            id: [0, Validators.required],
        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(item) {
        this.storeD.dispatch(CodeDetailApiActions.addCodeDetail({ codeDetail: item }));
        this.close();
    }
    report() {
    }
}
