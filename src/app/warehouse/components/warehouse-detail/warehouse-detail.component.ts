import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Warehouse } from '@appdata';
import { WarehousesApiActions } from '@app/warehouse/actions';
import { WarehouseSelectors } from '@app/warehouse/selectors';

@Component({
    selector: 'ngx-warehouse-detail',
    templateUrl: './warehouse-detail.component.html',
    styleUrls: ['./warehouse-detail.component.scss'],
})

export class WarehouseDetailComponent implements OnInit {
    warehouse$;
    id$: number;

    constructor(
        private router: ActivatedRoute,
        private store: Store<Warehouse>
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.warehouse$ = this.store.pipe(select(WarehouseSelectors.selectCurrentWarehouse(this.id$)));
    }

    ngOnInit() {
        this.store.dispatch(WarehousesApiActions.getWarehouses({warehouses: []}));
    }

}
