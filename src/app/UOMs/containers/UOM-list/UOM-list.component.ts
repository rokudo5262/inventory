import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UOM } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { NbDialogService } from '@nebular/theme';
import { UomSelectors } from '@app/UOMs/selectors/uom.selectors';
import { UomsApiActions } from '@app/UOMs/actions';
import { UomAddComponent } from '../UOM-add/UOM-add.component';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'ngx-uom-list',
    template: `
    <nb-card>
        <nb-card-header>
            <p>UOMs<p>
            <div class="button">
                <button class="btn btnAdd" (click)="add()" nbButton status="success" nbTooltip="Add New UOM" nbTooltipPlacement="top"><i class="fa fa-plus" aria-hidden="true"></i><span>UOM</span></button>
                <button class="btn btnSave" (click)="save()" nbButton status="info" nbTooltip="Save UOM" nbTooltipPlacement="top"><i class="fas fa-save" aria-hidden="true"></i><span>Save</span></button>
                <button class="btn btnDelete" (click)="delete()" nbButton status="danger" nbTooltip="Delete UOM" nbTooltipPlacement="top"><i class="fas fa-trash" aria-hidden="true"></i><span>Delete</span></button>
            </div>
        </nb-card-header>
        <nb-card-body>
            <ng2-smart-table [settings]="settings" [source]="uoms$ | async"
                (userRowSelect)="onUserRowSelect($event)"
                (editConfirm)="edit($event)">
            </ng2-smart-table>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    :host /deep/ .ng2-smart-action-multiple-select{
        text-align: center;
        width: 5%;
        margin: auto;
    }

    :host /deep/ .ng2-smart-action-multiple-select > input{
        width: 13px;
        height: 13px;
        display: unset;
    }

    p {
        float: left;
        font-size: 24px;
        margin: 10px 0;
        font-weight: bold;
    }

    .button {
        float: right;
    }

    .btn {
        width: 120px;
        margin-left: 10px;
    }

    .btn span {
        margin-left: 5px;
    }
    `],
})

export class UomListComponent implements OnInit {

    @Input() uoms: UOM[];
    @Output() uomSelected: EventEmitter<number> = new EventEmitter();

    settings = {
        actions: {
            delete: false,
            add: false,
            position: 'right',
        },
        pager: {
            display: true,
            perPage: 10,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        selectMode: 'multi',
        columns: {
            uomCode: {
                title: 'UOM Code',
                type: 'string',
                editable: false,
                width: '50%',
            },
            uomName: {
                title: 'UOM Name',
                type: 'string',
                width: '50%',
            },
        },
    };
    uoms$: Observable<UOM[]>;
    dialogRef: any;
    selectedRows: any;

    constructor(
        private store: Store<UOM>,
        private dialogService: NbDialogService,
    ) {
        this.uoms$ = this.store.pipe(select(UomSelectors.selectAllUoms));
    }

    ngOnInit() {
        this.store.dispatch(UomsApiActions.getUoms({ uoms: [] }));
    }

    add() {
        this.dialogService.open(UomAddComponent);
    }

    close() {
        this.dialogRef.reject();
    }

    edit(event) {
        const changes = event.newData;
        const update: Update<UOM> = {
            id: event.data.id,
            changes: changes
        };
        if (window.confirm('Are you sure you want to update?')) {
            this.store.dispatch(UomsApiActions.updateUom({ update: update }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUserRowSelect(event) {
        this.selectedRows = event.selected;
    }
    delete(event) {
        if (window.confirm('Are you sure you want to delete ' + this.selectedRows + '?')) {
            this.store.dispatch(UomsApiActions.updateDeletes({ ids: this.selectedRows }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
