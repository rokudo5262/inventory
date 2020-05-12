import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeMaster } from '@app/@core/data';
import { NbDialogRef } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { CodeMasterApiActions } from '@app/code-master/actions';
import { Observable } from 'rxjs';
import { CodeMasterSelectors } from '@app/code-master/selectors';

@Component({
    selector: 'cm-edit',
    templateUrl: './cm-edit.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
    }
    `],
})

export class CodeMasterEditComponent implements OnInit {
    public editCodeMasterForm: FormGroup;
    public codeMaster: CodeMaster;
    // @Output() reponse: EventEmitter<any> = new EventEmitter();
    codeMasters$: Observable<CodeMaster[]>;
    constructor(
        private dialogRef: NbDialogRef<CodeMasterEditComponent>,
        private fb: FormBuilder,
        private store: Store<CodeMaster>,
    ) {
        this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));
    }

    ngOnInit() {
        this.createForm();
    }

    createForm = () => {
        this.editCodeMasterForm = this.fb.group({
            companyCode: [this.codeMaster ? this.codeMaster.companyCode : '', Validators.required],
            cMCode: [this.codeMaster ? this.codeMaster.cMcode : '', Validators.required],
            cMName: [this.codeMaster ? this.codeMaster.cMname : '', Validators.required],
            standardName: [this.codeMaster ? this.codeMaster.standardName : '', Validators.required],
            systemCode: [this.codeMaster ? this.codeMaster.systemCode : false, Validators.required],
            remark: [this.codeMaster ? this.codeMaster.remark : '', Validators.required],
            deleted: [this.codeMaster ? this.codeMaster.deleted : false, Validators.required],
            id: [this.codeMaster ? this.codeMaster.id : 0, Validators.required],
        });
    }

    close() {
        this.dialogRef.close();
    }

    onSubmit(item) {
        if (item.companyCode !== '' &&
            item.cMCode !== '' &&
            item.cMName !== '' &&
            item.standardName !== '' &&
            item.remark !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item
                };
                this.store.dispatch(CodeMasterApiActions.updateCodeMaster({ update: update }));
            }
        }
        this.close();
    }
    selectedCm: CodeMaster;
    onSelect(codeMaster: CodeMaster): void {
        this.selectedCm = codeMaster;
    }
}
