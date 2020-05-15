import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selectors';
import { StructuresActions } from '@app/structure/actions';
import { StructureAddComponent } from '../structure-add/structure-add.component';

@Component({
  selector: 'ngx-structure-smart-table',
  templateUrl: './structure-smart-table.component.html',
  styleUrls: ['./structure-smart-table.component.scss'],
})

export class StructureSmartTableComponent implements OnInit {
  // @ViewChild('table', { static: true }) table: Ng2SmartTableComponent;
  settings = {
    selectMode: 'multi',
    mode: 'external',
    // mode: 'inline',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      structureCode: {
        title: 'Structure Code',
        type: 'string',
      },
      structureName: {
        title: 'Structure Name',
        type: 'string',
      },
      level: {
        title: 'level',
        type: 'number',
      },
      parentCode: {
        title: 'Parent Code',
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
  structures$: Observable<Structure[]>;
  dialogRef: any;
  selectedRows = [];
  constructor(
    private store: Store<Structure>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.structures$ = this.store.pipe(select(StructureSelectors.selectAllStructures));
    this.structures$.subscribe(g => console.log(g.length));
  }

  ngOnInit() {
    this.store.dispatch(StructuresActions.getStructures({ structures: [] }));
    // this.hideColumnForUser();
  }
  add() {
    this.dialogService.open(StructureAddComponent);
  }
  // delete(event) {
  //   const changes = event.newData;
  //   const store: Structure = {
  //     id: changes.id,
  //     companyCode: changes.companyCode,
  //     structureCode: changes.structureCode,
  //     structureName: changes.structureName,
  //     level: +changes.level,
  //     type: changes.type,
  //     parentCode: changes.parentCode,
  //     status: changes.status,
  //     remark: changes.remark,
  //     source: changes. source,
  //     delete1: changes.delete1,
  //   }
  //   const update : Update<Structure> = {
  //     id: event.data.id,
  //     changes: store
  //   };
  //   this.store.dispatch(StructureApiActions.removeStructure({ update: update }));
  //   event.confirm.resolve();
  // }

  // delete(event) {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     const changes = event.newData;
  //     const update= {
  //       id: event.data.id,
  //       changes: changes,
  //     };
  //     this.store.dispatch(StructureApiActions.removeStructure({ update: update }));
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  delete(event) {
    if (window.confirm('Are you sure you want to delete ')) {
      this.store.dispatch(StructuresActions.deleteStructure({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
  structurevalue() {
    this.route.navigate(['dashboard/structure/structure-value']);
  }
  onCustomAction(event) {
    this.route.navigate(['dashboard/structure/structure', event.data.id]);
  }
  onUserRowSelect(event) {
    console.log('user row select: ', event); this.selectedRows = event.selected.map(x => x.id);
    console.log('selected list: ', this.selectedRows);
  }
  onClick() {
    // It will console all the selected rows
    console.log(this.selectedRows);
    alert('Are you sure you want to delete ' + this.selectedRows + '?');
    this.store.dispatch(StructuresActions.deleteStructures({ ids: this.selectedRows }));
  }
}
