import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Warehouse } from '@appdata';
import { Subject } from 'rxjs';

export function storageFactory() {
    return typeof window === 'undefined' || typeof localStorage === 'undefined'
        ? null
        : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
    'examples-local-storage',
    { factory: storageFactory },
);

@Injectable({ providedIn: 'root' })
export class WarehouseStorageService {
    private listKey = 'warehouses-app';

    warehouseChanged = new Subject<Warehouse[]>();
    startedEditting = new Subject<number>();

    supported(): Observable<boolean> {
        return this.storage !== null
          ? of(true)
          : throwError('Local Storage Not Supported');
      }

    getList(): Observable<Warehouse[]> {
        return this.supported().pipe(
            map(_ => this.storage.getItem(this.listKey)),
            map((value: string | null) => (value ? JSON.parse(value) : [])),
        );
    }
    addWarehouse(warehouse: Warehouse) {
        this.storage.push(warehouse);
        this.warehouseChanged.next(this.storage.slice());
    }

    addWarehouses(warehouses: Warehouse[]) {
        this.storage.push(...warehouses);
        this.warehouseChanged.next(this.storage.slice());
    }

    updateWarehouse(index: number, newWarehouse: Warehouse) {
        this.storage[index] = newWarehouse;
        this.warehouseChanged.next(this.storage.slice());
    }

    deleteWarehouse(index: number) {
        this.storage.splice(index, 1);
        this.warehouseChanged.next(this.storage.slice());
    }
    constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

}
