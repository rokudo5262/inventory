import { Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { OnInit, Component } from '@angular/core';
import { State } from '@app/reducers';
import { Store, select } from '@ngrx/store';
import { WarehouseSearchSelectors, WarehouseSelectors } from '../selectors';
import { WarehouseListActions, FindWarehouseActions } from '../actions';
import { NbDialogService } from '@nebular/theme';
import { WarehouseNewComponent } from './warehouse-new/warehouse-new.component';

@Component({
    selector: 'warehouse-page',
    templateUrl: './warehouses.component.html',
    styleUrls: ['./warehouses.component.scss']
})

export class WarehousePageComponent implements OnInit {
    warehouses$: Observable<Warehouse[]>;

    // Search Function
    searchedWarehouses$: Observable<Warehouse[]>;
    searchQuery$: Observable<string>;
    searchLoading$: Observable<boolean>;
    searchErrors$: Observable<string>;

    constructor(
        private store: Store<State>,
        private dialogService: NbDialogService,
    ) {
        this.warehouses$ = this.store.pipe(select(WarehouseSelectors.selectAllWarehouses));

        // Search Function
        this.searchedWarehouses$ = this.store.pipe(select(WarehouseSearchSelectors.selectSearchWarehouseResults));
        this.searchQuery$ = this.store.pipe(select(WarehouseSearchSelectors.selectSearchWarehouseQuery));
        this.searchLoading$ = this.store.pipe(select(WarehouseSearchSelectors.selectSearchWarehouseLoading));
        this.searchErrors$ = this.store.pipe(select(WarehouseSearchSelectors.selectSearchWarehouseError));

        // this.searchedWarehouses$.subscribe(warehouses => console.log('receive ', warehouses.length));
    }

    open() {
        this.dialogService.open(WarehouseNewComponent);
    }

    ngOnInit() {
        this.store.dispatch(WarehouseListActions.loadWarehouseList());
    }

    search(query: string) {
        this.store.dispatch(FindWarehouseActions.searchWarehouses({ query }));
    }
}
