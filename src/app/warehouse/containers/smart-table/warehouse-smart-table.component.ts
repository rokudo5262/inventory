import { Component, OnInit } from '@angular/core';
import { Warehouse } from '@appdata';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { WarehousesApiActions } from '../../actions';
import { WarehouseSelectors } from '../../selectors';

@Component({
  selector: 'warehouse-smart-table',
  templateUrl: './warehouse-smart-table.component.html',
})

export class WarehouseSmartTableComponent implements OnInit {
  // @Input() warehouses: Warehouse[];
  // actionsSubscription: Subscription;

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
        title: 'Id',
        type: 'number',
        editable: false,
      },
      warehouseName: {
        title: 'Name',
        type: 'string',
      },
      locationId: {
        title: 'Location Id',
        type: 'number',
      },
      warehouseAddress: {
        title: 'Address',
        type: 'string',
      },
      managerId: {
        title: 'Warehouse Manager Id',
        type: 'number',
      },
      warehouseCode: {
        title: 'Warehouse Code',
        type: 'string',
      },
      warehouseStatus: {
        title: 'Status',
        type: 'string',
      },
    },
    hideSubHeader: true,
  };

  // source: LocalDataSource = new LocalDataSource();
  // data: any = [];
  // constructor(
  //   private _route: Router,
  //   private _store: Store<Warehouse[]>,
  //   private service: WarehousesService, ) {
  //   this.service.getWarehousesData().toPromise().then(item => { this.source.load(item); });
  // }
  warehouses$: Observable<Warehouse[]>;
  update: Update<Warehouse> = {
    id: null,
    changes: null
  };
  dialogRef: any;
  constructor(
    private route: Router,
    private store: Store<Warehouse>
    ) {
    this.warehouses$ = this.store.pipe(select(WarehouseSelectors.selectAllWarehouses));
  }
  ngOnInit() {
    this.store.dispatch(WarehousesApiActions.getWarehouses({ warehouses: [] }));
  }
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete ' + event.data.warehouseName + '?')) {
      this.store.dispatch(WarehousesApiActions.removeWarehouse({ id: event.data.id }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to edit ' + event.data.warehouseName + '?')) {
      const changes = event.newData;
      const update: Update<Warehouse> = {
        id: event.data.id,
        changes: changes
      };
      this.store.dispatch(WarehousesApiActions.updateWarehouse({ update: update }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  navigateToWarehouse(event) {
    this.route.navigate(['dashboard/warehouse/warehouse', event.data.id]);
  }
}
