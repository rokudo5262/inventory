import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeMaster } from '@app/@core/data';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'cm-new',
    templateUrl: './cm-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
        float: right;
    }
    `],
})
export class CodeMasterNewComponent implements OnInit {
    public addCodeMasterForm: FormGroup;
    public codeMaster: CodeMaster;
    @Output() reponse: EventEmitter<any> = new EventEmitter();

    constructor(
        private dialogRef: NbDialogRef<CodeMasterNewComponent>,
        private fb: FormBuilder,
    ) {
    }
    ngOnInit() {
        this.createForm();
    }
    createForm = () => {
        this.addCodeMasterForm = this.fb.group({
            companyCode: [this.codeMaster ? this.codeMaster.companyCode : '1', Validators.required],
            cMcode: [this.codeMaster ? this.codeMaster.cMcode : '', Validators.required],
            cMname: [this.codeMaster ? this.codeMaster.cMname : '', Validators.required],
            standardName: [this.codeMaster ? this.codeMaster.standardName : '', Validators.required],
            systemCode: [this.codeMaster ? this.codeMaster.systemCode : false, Validators.required],
            remark: [this.codeMaster ? this.codeMaster.remark : '', Validators.required],
            deleted: [this.codeMaster ? this.codeMaster.deleted : false, Validators.required],
            id: [this.codeMaster ? this.codeMaster.id : 0, Validators.required],
            status: [this.codeMaster ? this.codeMaster.status : '', Validators.required],
            source: [this.codeMaster ? this.codeMaster.source : '', Validators.required],
            createdBy: [this.codeMaster ? this.codeMaster.createdBy : '1', Validators.required],
            createdDateTime: [this.codeMaster ? this.codeMaster.createdDateTime : '', Validators.required],
            lastUpdatedBy: [this.codeMaster ? this.codeMaster.lastUpdatedBy : '1', Validators.required],
            rowVersion: [this.codeMaster ? this.codeMaster.rowVersion : [], Validators.required],
        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(item) {
        this.dialogRef.close(item);
    }
}
