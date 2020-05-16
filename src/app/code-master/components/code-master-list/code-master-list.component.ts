import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeMasterActions } from '@app/code-master/actions';
import { Store, select } from '@ngrx/store';
import { CodeMaster } from '@app/@core/data';
import { CodeMasterSelectors } from '@app/code-master/selectors';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { NbDialogService } from '@nebular/theme';
import { CodeMasterAddComponent } from '../code-master-add/code-master-add.component';

@Component({
    selector: 'ngx-code-master-list',
    templateUrl: './code-master-list.component.html',
    styleUrls: ['code-master-list.component.scss'],
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
        this.store.dispatch(CodeMasterActions.getCodeMasters());
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
        this.store.dispatch(CodeMasterActions.updateDeletes({ ids: this.selectedRows }));
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
        this.store.dispatch(CodeMasterActions.updateSystems({ updates: updates }));
        // this.onRefresh();
    }
    onCreated() {
        this.dialogService.open(CodeMasterAddComponent)
            .onClose.subscribe(item => {
                this.store.dispatch(CodeMasterActions.addCodeMaster({ codeMaster: item }));
                // this.onRefresh();
            });
    }
}
