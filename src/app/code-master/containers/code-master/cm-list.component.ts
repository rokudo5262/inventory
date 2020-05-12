import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeMasterApiActions } from '@app/code-master/actions';
import { Store, select } from '@ngrx/store';
import { CodeMaster } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { Observable } from 'rxjs';
import { SystemCheckboxComponent } from '@app/code-master/components/code-master/system-checkbox.component';
import { FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { NbDialogService } from '@nebular/theme';
import { CodeMasterNewComponent } from './new-cm/cm-new.component';

@Component({
    selector: 'code-master-list',
    templateUrl: './cm-list.component.html',
    styleUrls: ['cm-list.component.scss'],
})

export class CodeMasterListComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;

    settings = {
        selectMode: 'multi',
        mode: 'external',
        columns: {
            cMcode: {
                title: 'Code Master Code',
                type: 'string',
            },
            cMname: {
                title: 'Code Master Name',
                type: 'string',
            },
            standardName: {
                title: 'Standard Name',
                type: 'number',
            },
            systemCode: {
                title: 'System Code',
                type: 'custom',
                editable: false,
                renderComponent: SystemCheckboxComponent,
            },
            remark: {
                title: 'Remark',
                type: 'string',
            },
        },
        hideSubHeader: true,
        actions: {
            add: false,
            edit: true,
            delete: false,
        },
        edit: {
            editButtonContent: '<i class="nb-compose"></i>',
        },
    };
    constructor(
        private dialogService: NbDialogService,
        private route: Router,
        private store: Store<CodeMaster>) {
        this.codeMasters$ = this.store.pipe(select(CodeMasterSelectors.selectAllCodeMasters));
    }
    ngOnInit() {
        this.onRefresh();
    }

    onRefresh() {
        this.store.dispatch(CodeMasterApiActions.getCodeMasters());
    }

    onEdit(event) {
        this.route.navigate(['dashboard/codeMaster/codeMaster', event.data.id]);
    }
    public updateDeleteForm: FormGroup;
    selectedRows: [];
    lastClick: number = 0;
    onUserRowSelect(event) {
        this.selectedRows = event.selected.map(x => x.id);
    }
    onDelete() {
        alert('Are you sure you want to delete ' + this.selectedRows + '?');
        this.store.dispatch(CodeMasterApiActions.updateDeletes({ ids: this.selectedRows }));
        // this.onRefresh();
    }
    onSystem() {
        alert('Are you sure you want to have ' + this.selectedRows + 'had system mode ?');
        const updates: Update<CodeMaster>[] = [];
        this.selectedRows.forEach(item => updates.push(
            {
                id: item,
                changes: item
            }
        ));
        this.store.dispatch(CodeMasterApiActions.updateSystems({ updates: updates }));
        // this.onRefresh();
    }
    onCreated() {
        this.dialogService.open(CodeMasterNewComponent)
            .onClose.subscribe(item => {
                this.store.dispatch(CodeMasterApiActions.addCodeMaster({ codeMaster: item }));
                // this.onRefresh();
            });
    }
}
