import { Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { OnInit, Component } from '@angular/core';
import { State } from '@app/reducers';
import { Store, select } from '@ngrx/store';
import { WarehouseSearchSelectors, WarehouseSelectors } from '../../selectors';
import { WarehouseListActions, FindWarehouseActions } from '../../actions';
import { NbDialogService } from '@nebular/theme';
import { WarehouseAddComponent } from '../../components/warehouse-add/warehouse-add.component';

@Component({
    selector: 'ngx-warehouse-page',
    templateUrl: './warehouse-page.component.html',
    styleUrls: ['./warehouse-page.component.scss']
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
    }

    open() {
        this.dialogService.open(WarehouseAddComponent);
    }

    ngOnInit() {
        this.store.dispatch(WarehouseListActions.loadWarehouseList());
    }

    search(query: string) {
        this.store.dispatch(FindWarehouseActions.searchWarehouses({ query }));
    }
}
