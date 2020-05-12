import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplyForHeader } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplyForHeaderSelectors } from '@app/apply-for/selectors';
import { ApplyForHeaderApiActions } from '@app/apply-for/actions';

@Component({
    selector: 'header-edit',
    templateUrl: './header-edit.component.html',
    styles: [`
    button[nbButton]{
        margin: 5px;
    }
    `],
})

export class ApplyForHeaderEditComponent implements OnInit {
    public editApplyForHeaderForm: FormGroup;
    @Input() applyForHeader: ApplyForHeader;
    applyForHeaders$: Observable<ApplyForHeader[]>;
    constructor(
        // private dialogRef: NbDialogRef<ApplyForHeaderEditComponent>,
        private fb: FormBuilder,
        private store: Store<ApplyForHeader>,
    ) {
        this.applyForHeaders$ = this.store.pipe(select(ApplyForHeaderSelectors
            .selectAllApplyForHeaders));
    }

    ngOnInit() {
        this.createForm();
    }

    createForm = () => {
        this.editApplyForHeaderForm = this.fb.group({
            companyCode: [this.applyForHeader ? this.applyForHeader.companyCode : '',
            Validators.required],
            applyForCode: [this.applyForHeader ? this.applyForHeader.applyForCode : '',
            Validators.required],
            customerCode: [this.applyForHeader ? this.applyForHeader.customerCode : '',
            Validators.required],
            applyForName: [this.applyForHeader ? this.applyForHeader.applyForName : '',
            Validators.required],
            applyForType: this.applyForHeader ? this.applyForHeader.applyForType : ['',
                Validators.required],
            description: [this.applyForHeader ? this.applyForHeader.description : '',
            Validators.required],
            remark: [this.applyForHeader ? this.applyForHeader.remark : '',
            Validators.required],
            status: [this.applyForHeader ? this.applyForHeader.status : 'Active',
            Validators.required],
            source: [this.applyForHeader ? this.applyForHeader.source : '',
            Validators.required],
            createdBy: [this.applyForHeader ? this.applyForHeader.createdBy : '',
            Validators.required],
            createdDateTime: [
                this.applyForHeader ? this.applyForHeader.createdDateTime : '2020/3/9',
            Validators.required],
            lastUpdatedBy: [
                this.applyForHeader ? this.applyForHeader.lastUpdatedBy : '',
            Validators.required],
            lastUpdatedDateTime: [
                this.applyForHeader ? this.applyForHeader.lastUpdatedDateTime : '2020/3/9',
                Validators.required],
            rowVersion: [
                this.applyForHeader ? this.applyForHeader.rowVersion : [],
            Validators.required],
            deleted: [
                this.applyForHeader ? this.applyForHeader.deleted : false,
            Validators.required],
            id: [
                this.applyForHeader ? this.applyForHeader.id : 0,
            Validators.required],
        });
    }
    close() {
        // this.dialogRef.close();
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
            item.lastUpdatedDateTime !== '') {
            if (item.id !== 0) {
                const update = {
                    id: item.id,
                    changes: item
                };
                this.store.dispatch(ApplyForHeaderApiActions.updateApplyForHeader({ update: update }));
            }
        }
        this.close();
    }
}
