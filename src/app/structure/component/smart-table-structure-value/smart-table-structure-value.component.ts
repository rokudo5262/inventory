import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StructureValueSelectors } from '@app/structure/selector';
import { StructureValueApiActions } from '@app/structure/actions';
import { StructureValueAddComponent } from './add-structure-value/add-strucrure-value.component';
import { StructureValue } from '@app/@core/data/structure-value';

@Component({
  selector: 'ngx-smart-table-structure-value',
  templateUrl: './smart-table-structure-value.component.html',
  styleUrls: ['./smart-table-structure-value.component.scss'],
})
export class SmartTableStructureValueComponent implements OnInit {
  settings = {
    selectMode: 'multi',
    mode: 'external',
    delete: {
      // deleteButtonContent: '<i class="nb-trash"></i>',
      // confirmDelete: true,
      // // confirmSave: true

    },
    columns: {
      // id: {
      //   title:'id',
      //   type:'number',
      //   edit: false,
      //    show: false,//hidden
      // },
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
      // show: false,
      // position: 'left',
    },
  };
  //   hideColumnForUser(){
  //     if (this.settings.columns["id"].hasOwnProperty("show")) {
  //       if (this.settings.columns["id"].show ==false) {
  //         delete this.settings.columns["id"];
  //       }
  // }
  // }
  structurevalues$: Observable<StructureValue[]>;
  dialogRef: any;
  selectedRows = [];

  constructor(
    private store: Store<StructureValue>,
    private route: Router,
    private dialogService: NbDialogService
  ) {
    this.structurevalues$ = this.store.pipe(select(StructureValueSelectors.selectAllStructureValues));
  }

  ngOnInit() {
    // this.hideColumnForUser();
    this.store.dispatch(StructureValueApiActions.getStructureValues({ structurevalues: [] }));
  }
  open3() {
    this.dialogService.open(StructureValueAddComponent);
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
  // onUserRowSelect(event) {
  //   this.selectedRows = event.data.id;
  // }
  delete(event) {
    if (window.confirm('Are you sure you want to delete ')) {
      this.store.dispatch(StructureValueApiActions.deleteStructureValue({ id: event.data.id }));
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
    // It will console all the selected rows
    console.log(this.selectedRows);
    this.store.dispatch(StructureValueApiActions.deleteStructureValues({ ids: this.selectedRows }));
  }
}
