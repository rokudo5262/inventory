import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplyForHeader } from '@app/@core/data';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { ApplyForHeaderApiActions } from '@app/apply-for/actions';

@Component({
    selector: 'af-header-new',
    templateUrl: './af-header-new.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
    }
    `],
})

export class ApplyHeaderNewComponent implements OnInit {
    public addApplyHeaderForm: FormGroup;
    @Input() applyForHeader: ApplyForHeader;
    @Input() editor: boolean;
    constructor(
        private dialogRef: NbDialogRef<ApplyHeaderNewComponent>,
        private fb: FormBuilder,
        private store: Store<ApplyForHeader>,
    ) {
    }

    ngOnInit() {
       this.createForm();
    }
    createForm = () => {
        this.addApplyHeaderForm = this.fb.group({
            companyCode: ['', Validators.required],
            applyForCode: ['', Validators.required],
            customerCode: ['', Validators.required],
            applyForName: ['', Validators.required],
            applyForType: ['', Validators.required],
            description: ['', Validators.required],
            remark: ['', Validators.required],
            status: ['Active', Validators.required],
            source: ['', Validators.required],
            createdBy: ['', Validators.required],
            createdDateTime: ['2020/3/9', Validators.required],
            lastUpdatedBy: ['', Validators.required],
            lastUpdatedDateTime: ['2020/3/9', Validators.required],
            rowVersion: [[], Validators.required],
            deleted: [false, Validators.required],
            id: [0, Validators.required],

        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(item) {
        if (item.companyCode !== '' &&
            item.applyForCode !== '' &&
            item.customerCode !== '' &&
            item.applyForName !== '' &&
            item.applyForType !== '' &&
            item.description !== '' &&
            item.remark !== '' &&
            item.status !== '' &&
            item.source !== '' &&
            item.createdBy !== '' &&
            item.createdDateTime !== '' &&
            item.lastUpdatedBy !== '' &&
            item.lastUpdatedDateTime !== ''
            ) {
            this.store.dispatch(ApplyForHeaderApiActions.addApplyForHeader({ applyForHeader: item }));
        }
        this.close();
    }
}
