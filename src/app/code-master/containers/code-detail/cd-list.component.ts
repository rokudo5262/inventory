import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeDetailApiActions } from '@app/code-master/actions';
import { Store, select } from '@ngrx/store';
import { CodeDetail } from '@appdata';
import { CodeDetailSelectors } from '@app/code-master/selectors';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { CodeDetailNewComponent } from './new-cd/cd-new.component';

@Component({
    selector: 'code-detail-list',
    templateUrl: './cd-list.component.html',
    styles: [`
    .title{
        font-size: 30px;
        margin: auto 0;
    }
    .row{
        margin: 0 ;
        justify-content: space-between;
    }
    button[nbButton]{
        margin: 0 5px;
    }
    `],
})
export class CodeDetailListComponent implements OnInit {
    codeDetails$: Observable<CodeDetail[]>;
    settings = {
        selectMode: 'multi',
        mode: 'inline',
        columns: {
            // id: {
            //     title: 'Id',
            //     type: 'number',
            //     editable: false,
            // },
            // companyCode: {
            //     title: 'Company Code',
            //     type: 'string',
            // },
            cMCode: {
                title: 'Code Master Code',
                type: 'string',
            },
            cdCode: {
                title: 'Code Detail Code',
                type: 'string',
            },
            cdName: {
                title: 'Code Detail Name',
                type: 'string',
            },
            standardName: {
                title: 'Standard Name',
                type: 'number',
            },
            // customerCode: {
            //     title: 'Customer Code',
            // },
            remark: {
                title: 'Remark',
                type: 'string',
            },
            // deleted: {
            //     title: 'Deleted',
            //     type: 'button',
            //     config: {
            //         true: 'Yes',
            //         false: 'No',
            //     },
            // },
        },
        hideSubHeader: true,
        actions: false,
    };
    constructor(
        private dialogService: NbDialogService,
        private route: Router,
        private store: Store<CodeDetail>, ) {
        this.codeDetails$ = this.store.pipe(select(CodeDetailSelectors.selectAllCodeDetails));
    }
    ngOnInit() {
        this.store.dispatch(CodeDetailApiActions.getCodeDetails({ codeDetails: [] }));
    }
    navigateToCodeMaster() {
        this.route.navigate(['dashboard/codeMaster/codeMaster']);
    }
    open() {
        this.dialogService.open(CodeDetailNewComponent);
    }
    selectedRows: [];
    lastClick: number = 0;
    onUserRowSelect(event) {
        console.log(event);
        this.lastClick += 1;
        setTimeout(() => {
            if (this.lastClick > 1) {
                this.onDoubleClick(event);
            } else {
                if (this.lastClick > 0) {
                    this.onClick(event);
                }
            }
            this.lastClick = 0;
        }, 500);
    }
    onDoubleClick(event) {
        alert('Double click ' + this.selectedRows + '?');
        this.route.navigate(['dashboard/codeMaster/codeDetail', event.data.id]);
    }
    onClick(event) {
        this.selectedRows = event.selected.map(x => x.id);
    }
    onDelete() {
        alert('Are you sure you want to delete ' + this.selectedRows + '?');
        this.store.dispatch(CodeDetailApiActions.updateDeletes({ ids: this.selectedRows }));
    }
}
