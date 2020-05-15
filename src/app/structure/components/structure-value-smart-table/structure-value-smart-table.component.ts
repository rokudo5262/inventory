import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { StructureValueSelectors } from '@app/structure/selectors';
import { StructureValue } from '@app/@core/data/structure-value';
import { StructureValuesActions } from '@app/structure/actions';

@Component({
  selector: 'ngx-structure-value-smart-table',
  templateUrl: './structure-value-smart-table.component.html',
  styleUrls: ['./structure-value-smart-table.component.scss'],
})
export class StructureValueSmartTableComponent implements OnInit {
  settings = {
    selectMode: 'multi',
    mode: 'external',
    delete: {
    },
    columns: {
      structureValueCode: {
        title: 'structure Value Code',
        type: 'string',
      },
      structureValueName: {
        title: 'structure Value Name',
        type: 'string',
      },
      level: {
        title: 'level',
        type: 'number',
      },
      type: {
        title: 'type',
        type: 'string',
      },
      parentCode: {
        title: 'Parent Code',
        type: 'string',
      },
      parentValue: {
        title: 'Parent Value',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
    hideSubHeader: false,
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
    },
  };
  structurevalues$: Observable<StructureValue[]>;
  dialogRef: any;
  selectedRows = [];

  constructor(
    private store: Store<StructureValue>,
    private route: Router,
  ) {
    this.structurevalues$ = this.store.pipe(select(StructureValueSelectors.selectAllStructureValues));
    this.structurevalues$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(StructureValuesActions.getStructureValues({ structurevalues: [] }));
  }
  close() {
    this.dialogRef.close();
  }

  back() {
    this.route.navigate(['dashboard/structure/structure']);
  }
  onCustomAction(event) {
    this.route.navigate(['dashboard/structure/structure-value', event.data.id]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete ')) {
      this.store.dispatch(StructureValuesActions.deleteStructureValue({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onUserRowSelect(event) {
    console.log('user row select: ', event); this.selectedRows = event.selected.map(x => x.id);
    console.log('selected list: ', this.selectedRows);
  }
  onClick() {
    console.log(this.selectedRows);
    this.store.dispatch(StructureValuesActions.deleteStructureValues({ ids: this.selectedRows }));
  }
}
