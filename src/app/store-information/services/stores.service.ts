import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreInformation } from '@app/@core/data/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  API_PATH = 'http://localhost:5000/api/storeinformations';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  storeCookiesString = 'STORES_COOKIES';
  storeinformation: StoreInformation;
  storeinformations: StoreInformation[];
  constructor(private http: HttpClient) {
  }
  getStores(): Observable<StoreInformation[]> {
    return this.http.get<StoreInformation[]>(this.API_PATH, this.options);
  }
  updateStore(changes: Partial<StoreInformation>) {
    return this.http.put<StoreInformation>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  addStore(storeinformation: StoreInformation) {
    return this.http.post<StoreInformation>(this.API_PATH, storeinformation, this.options);
  }
  removeStore(id: number) {
    return this.http.delete<StoreInformation>(this.API_PATH + '/' + id, this.options);
  }
}
