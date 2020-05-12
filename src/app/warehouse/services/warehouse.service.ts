import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Warehouse } from '@appdata';
import { WarehouseData } from '@app/@core/mock/warehouse';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WarehousesService {
    API_PATH = 'http://localhost:5000/api/warehouses';
    options = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        }),
        // params: httpParam
      };
    warehouseCookiesString = 'WAREHOUSES_COOKIES';
    warehouse: Warehouse;
    warehouses: Warehouse[];

    constructor(private http: HttpClient) {
        // this.warehouses = WarehouseData;
    }

    getWarehouses(): Observable<Warehouse[]> {
        // this.warehouses = WarehouseData;
        // return observableOf(this.warehouses);
        return this.http.get<Warehouse[]>(this.API_PATH, this.options);
    }

    getWarehousesData(): Observable<any> {
        this.warehouses = WarehouseData;
        return observableOf(this.warehouses);
    }

    getWarehouse(id: number): Observable<Warehouse> {
        this.warehouse = WarehouseData.find(x => x.id === id);
        return observableOf(this.warehouse);
    }

    removeWarehouse(id: number) {
        return this.http.delete<Warehouse>(this.API_PATH + '/' + id, this.options);
    }

    addWarehouse(warehouse: Warehouse) {
        return this.http.post<Warehouse>(this.API_PATH, warehouse, this.options);
    }

    updateWarehouse( changes: Partial<Warehouse>) {
        return this.http.put(this.API_PATH + '/' + changes.id, changes, this.options);
    }

}
