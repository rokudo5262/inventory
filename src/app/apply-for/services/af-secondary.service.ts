import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplyForSecondaryCustomer } from '@appdata';

@Injectable({
  providedIn: 'root'
})
export class ApplyForSecondaryCustomerService {
  API_PATH = 'http://localhost:5000/api/applyforsecondarycustomers';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  applyForSecondaryCustomer: ApplyForSecondaryCustomer;
  applyForSecondaryCustomers: ApplyForSecondaryCustomer[];

  constructor(private http: HttpClient) {

  }
  getApplyForSecondaryCustomers(): Observable<ApplyForSecondaryCustomer[]> {
    return this.http.get<ApplyForSecondaryCustomer[]>(this.API_PATH, this.options);
  }
  getApplyForSecondaryCustomer(): Observable<ApplyForSecondaryCustomer> {
    return this.http.get<ApplyForSecondaryCustomer>(this.API_PATH, this.options);
  }
  addApplyForSecondaryCustomer(applyForSecondaryCustomer: ApplyForSecondaryCustomer) {
    return this.http.post<ApplyForSecondaryCustomer>(this.API_PATH, applyForSecondaryCustomer, this.options);
  }
  update(changes: Partial<ApplyForSecondaryCustomer>) {
    return this.http.put<ApplyForSecondaryCustomer>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  updateDelete(id: number) {
    return this.http.put<ApplyForSecondaryCustomer>(this.API_PATH + '/delete/' + id, this.options);
  }
  updateDeletes(ids: number[]) {
    return this.http.put<ApplyForSecondaryCustomer[]>(this.API_PATH + '/delete', ids, this.options);
  }
}
