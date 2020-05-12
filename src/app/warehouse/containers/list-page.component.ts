import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { State } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { WarehouseListActions } from '../actions';
import { WarehouseListSelectors } from '../selectors';

@Component({
    selector: 'warehouse-list-page',
    template: `
    `,

})

export class ListPageComponent implements OnInit {
    warehouses$: Observable<Warehouse[]>;

    constructor( private store: Store<State>) {
        this.warehouses$ = this.store.pipe(select(WarehouseListSelectors.selectWarehouseList));
    }

    ngOnInit(): void {
        this.store.dispatch(WarehouseListActions.loadWarehouseList());
    }
}
