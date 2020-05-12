import { Injectable } from '@angular/core';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecondaryCustomerShipToAddresssService {
  API_PATH = 'http://localhost:5000/api/secondarycustomershiptoaddresses';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  secustomerstoa: SecondaryCustomerShipToAddress;
  secustomerstoas: SecondaryCustomerShipToAddress[];
  constructor(private http: HttpClient) {
  }
  getSecondaryCustomerShipToAddresss(): Observable<SecondaryCustomerShipToAddress[]> {
    return this.http.get<SecondaryCustomerShipToAddress[]>(this.API_PATH, this.options);
  }
  addSecondaryCustomerShipToAddress(secustomerstoa: SecondaryCustomerShipToAddress) {
    return this.http.post<SecondaryCustomerShipToAddress>(this.API_PATH, secustomerstoa, this.options);
  }
  UpdateSecondaryCustomerShipToAddress(changes: Partial<SecondaryCustomerShipToAddress>) {
    return this.http.put<SecondaryCustomerShipToAddress>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  deleteSecondaryCustomerShipToAddress(id: number) {
    return this.http.delete<SecondaryCustomerShipToAddress>(this.API_PATH + '/' + id, this.options);
  }
  deletesSecondaryCustomerShipToAddress(ids: number[]) {
    return this.http.put<SecondaryCustomerShipToAddress[]>(this.API_PATH + '/delete', ids, this.options);
  }
}
