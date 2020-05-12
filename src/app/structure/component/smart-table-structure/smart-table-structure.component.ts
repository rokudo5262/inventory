import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selector';
import { StructureApiActions } from '@app/structure/actions';
import { StructureAddComponent } from './add-structure/add-structure.component';

@Component({
  selector: 'ngx-smart-table-structure',
  templateUrl: './smart-table-structure.component.html',
  styleUrls: ['./smart-table-structure.component.scss'],
})

export class SmartTableStructureComponent implements OnInit {
  // @ViewChild('table', { static: true }) table: Ng2SmartTableComponent;
  settings = {
    selectMode: 'multi',
    mode: 'external',
    // mode: 'inline',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      // confirmSave: true
    },
    columns: {
      // id: {
      //   title: 'id',
      //   type: 'number',
      //   edit: false,
      //   show: false,//hidden
      // },
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
      // button: {
      //   title: 'Button',
      //   type: 'custom',
      //   renderComponent: ButtonStructureComponent,
      // }
    },
    hideSubHeader: false,
    // actions: false,
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
      // show: false,
      // position: 'left',
    },
  };
  // hideColumnForUser() {
  //   if (this.settings.columns["id"].hasOwnProperty("show")) {
  //     if (this.settings.columns["id"].show == false) {
  //       delete this.settings.columns["id"];
  //     }
  //   }
  // }
  structures$: Observable<Structure[]>;
  dialogRef: any;
  // selectedRows: any;
  selectedRows = [];
  constructor(
    private store: Store<Structure>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {

    this.structures$ = this.store.pipe(select(StructureSelectors.selectAllStructures));
  }

  ngOnInit() {
    this.store.dispatch(StructureApiActions.getStructures({ structures: [] }));
    // this.hideColumnForUser();
  }
  open3() {
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
      this.store.dispatch(StructureApiActions.deleteStructure({ id: event.data.id }));
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
    this.store.dispatch(StructureApiActions.deleteStructures({ ids: this.selectedRows }));
  }
}
