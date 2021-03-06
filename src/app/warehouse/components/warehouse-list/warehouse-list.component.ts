import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { WarehouseSelectors } from '@app/warehouse/selectors';
import { WarehousesApiActions } from '@app/warehouse/actions';

@Component({
    selector: 'ngx-warehouse-list',
    templateUrl: './warehouse-list.component.html',
    styleUrls: ['./warehouse-list.component.scss'],
})

export class WarehouseListComponent implements OnInit {
    warehouses$: Observable<Warehouse[]>;
    constructor(
        private store: Store<Warehouse>,
        private route: Router
    ) {
        this.warehouses$ = this.store.pipe(select(WarehouseSelectors.selectAllWarehouses));
        this.warehouses$.subscribe(g => console.log(g.length));
    }

    ngOnInit() {
        this.store.dispatch(WarehousesApiActions.getWarehouses({warehouses: []}));
    }

    navigateToWarehouse(id: number) {
        this.route.navigate(['dashboard/warehouse/warehouse', id]);
    }
}
