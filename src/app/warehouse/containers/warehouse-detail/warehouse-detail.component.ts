import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Warehouse } from '@appdata';
import { WarehousesApiActions } from '@app/warehouse/actions';
import { WarehouseSelectors } from '@app/warehouse/selectors';

@Component({
    template: `
    <nb-card>
        <nb-card-header>
            <h3>Warehouse Update</h3>
        </nb-card-header>
        <nb-card-body>
            <ngx-warehouse-detail [warehouse]="warehouse$ | async"></ngx-warehouse-detail>
        </nb-card-body>
    </nb-card>
    `
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
