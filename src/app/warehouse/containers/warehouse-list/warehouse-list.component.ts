import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { WarehouseSelectors } from '@app/warehouse/selectors';
import { WarehousesApiActions } from '@app/warehouse/actions';

@Component({
    selector: 'warehouse-list',
    template: `
    <ngx-warehouse-list [warehouses]="warehouses$ | async"
    (warehouseSelected)="navigateToWarehouse($event)"></ngx-warehouse-list>
    `,
})

export class ListComponent implements OnInit {
    warehouses$: Observable<Warehouse[]>;
    constructor(
        private store: Store<Warehouse>,
        private route: Router
    ) {
        this.warehouses$ = this.store.pipe(select(WarehouseSelectors.selectAllWarehouses));
    }

    ngOnInit() {
        this.store.dispatch(WarehousesApiActions.getWarehouses({warehouses: []}));
    }

    navigateToWarehouse(id: number) {
        this.route.navigate(['dashboard/warehouse/warehouse', id]);
    }
}
