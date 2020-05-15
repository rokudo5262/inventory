import { Component, OnInit } from '@angular/core';
import { StoreInformation } from '@app/@core/data/store';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StoreSelectors } from '@app/store-information/selectors';
import { StoresActions } from '@app/store-information/actions';
import { StoreAddComponent } from '../store-add/store-add.component';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'ngx-store-smart-table',
  templateUrl: './store-smart-table.component.html',
  styleUrls: ['./store-smart-table.component.scss'],
})
export class StoreSmartTableComponent implements OnInit {
  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      codeStore: {
        title: 'Code Store',
        type: 'number',
      },
      codeLocation: {
        title: 'Code Location',
        type: 'number',
      },
      codeStaff: {
        title: 'Code Staff',
        type: 'number',
      },
      openTime: {
        title: 'Open Time',
        type: 'Time',
      },
      closeTime: {
        title: 'Close Time',
        type: 'Time',
      },
      address: {
        title: 'Adress',
        type: 'string',
      },
    },
    actions: {
        add: false,
        delete: true,
        edit: true
    },
    hideSubHeader: true,
  };

  storeinformations$: Observable<StoreInformation[]>;
  dialogRef: any;
  constructor(
    private store: Store<StoreInformation>,
    private route: Router,
    private dialogService: NbDialogService
  ) {
    this.storeinformations$ = this.store.pipe(select(StoreSelectors.selectAllStores));
    this.storeinformations$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(StoresActions.getStores({ storeinformations: [] }));
  }
  open3() {
    this.dialogService.open(StoreAddComponent);
  }
  navigateToStore(event) {
    this.route.navigate(['dashboard/store-information/store-information', event.data.id]);
  }
  edit(event) {
    const changes = event.newData;
    const store: StoreInformation = {
      id: changes.id,
      codeStore: +changes.codeStore,
      codeLocation: +changes.codeLocation,
      codeStaff: +changes.codeStaff,
      openTime: null,
      closeTime: null,
      address: changes.address
    };
    const update: Update<StoreInformation> = {
      id: event.data.id,
      changes: store
    };
    this.store.dispatch(StoresActions.updateStore({ update: update }));
    event.confirm.resolve();
  }

  delete(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.store.dispatch(StoresActions.removeStore({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
