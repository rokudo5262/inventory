import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UOM } from '@app/@core/data';
import { Store, select } from '@ngrx/store';
import { NbDialogService } from '@nebular/theme';
import { UomSelectors } from '@app/UOMs/selectors/uom.selectors';
import { UomsActions } from '@app/UOMs/actions';
import { UomAddComponent } from '../UOM-add/uom-add.component';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'ngx-uom-list',
    templateUrl: './uom-list.component.html',
    styleUrls: ['./uom-list.component.scss'],
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
        this.store.dispatch(UomsActions.getUoms({ uoms: [] }));
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
            this.store.dispatch(UomsActions.updateUom({ update: update }));
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
            this.store.dispatch(UomsActions.updateDeletes({ ids: this.selectedRows }));
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
