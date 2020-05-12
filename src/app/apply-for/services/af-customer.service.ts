import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplyForCustomer } from '@appdata';

@Injectable({
  providedIn: 'root'
})
export class ApplyForCustomerService {
  API_PATH = 'http://localhost:5000/api/applyforcustomers';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  applyForCustomer: ApplyForCustomer;
  applyForCustomers: ApplyForCustomer[];
  constructor(private http: HttpClient) {
  }
  getApplyForCustomers(): Observable<ApplyForCustomer[]> {
    return this.http.get<ApplyForCustomer[]>(this.API_PATH, this.options);
  }
  getApplyForCustomer(): Observable<ApplyForCustomer> {
    return this.http.get<ApplyForCustomer>(this.API_PATH, this.options);
  }
  addApplyForCustomer(applyForCustomer: ApplyForCustomer) {
    return this.http.post<ApplyForCustomer>(this.API_PATH, applyForCustomer, this.options);
  }
  update(changes: Partial<ApplyForCustomer>) {
    return this.http.put<ApplyForCustomer>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  updateDelete(id: number) {
    return this.http.put<ApplyForCustomer>(this.API_PATH + '/delete/' + id, this.options);
  }
  updateDeletes(ids: number[]) {
    return this.http.put<ApplyForCustomer[]>(this.API_PATH + '/delete', ids, this.options);
  }
}
