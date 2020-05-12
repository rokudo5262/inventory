import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UOM } from '@app/@core/data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UomsService {
    API_PATH = 'http://localhost:5000/api/uoms';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'mode': 'no-cors',
        }),
    };
    uomCookiesString = 'UOMS_COOKIES';
    uom: UOM;
    uoms: UOM[];

    constructor(
        private http: HttpClient
    ) { }
    getUoms(): Observable<UOM[]> {
        return this.http.get<UOM[]>(this.API_PATH, this.options);
    }
    addUom(uom: UOM) {
        return this.http.post<UOM>(this.API_PATH, uom, this.options);
    }
    updateUom(changes: Partial<UOM>) {
        return this.http.put<UOM>(this.API_PATH + '/' + changes.id, changes, this.options);
    }
    // removeUom(id: number){
    //     return this.http.delete<UOM>(this.API_PATH + '/' + id, this.options);
    // }
    getUom(): Observable<UOM> {
        return this.http.get<UOM>(this.API_PATH, this.options);
    }
    updateDelete(id: number) {
        return this.http.delete<UOM>(this.API_PATH + '/' + id, this.options);
    }
    updateDeletes(ids: number[]) {
        return this.http.delete<UOM>(this.API_PATH + '/' + ids, this.options);
    }
}
