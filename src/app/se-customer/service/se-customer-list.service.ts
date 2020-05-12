import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondaryCustomersService {
  API_PATH = 'http://localhost:5000/api/secondarycustomers';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    }),
  };
  secondarycustomer: SecondaryCustomer;
  secondarycustomers: SecondaryCustomer[];
  constructor(private http: HttpClient) {
  }
  getSecondaryCustomers(): Observable<SecondaryCustomer[]> {
    return this.http.get<SecondaryCustomer[]>(this.API_PATH, this.options);
  }
  addSecondaryCustomer(secondarycustomer: SecondaryCustomer) {
    return this.http.post<SecondaryCustomer>(this.API_PATH, secondarycustomer, this.options);
  }
  UpdateSecondaryCustomer(changes: Partial<SecondaryCustomer>) {
    return this.http.put<SecondaryCustomer>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  deleteSecondaryCustomer(id: number) {
    return this.http.delete<SecondaryCustomer>(this.API_PATH + '/' + id, this.options);
  }
  deletesSecondaryCustomer(ids: number[]) {
    return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/delete', ids, this.options);
  }
  // RejectedUpdateSecondaryCustomer(changes:Partial<SecondaryCustomer>){
  //   return this.http.put<SecondaryCustomer>(this.API_PATH + '/rejected' + changes.id, changes, this.options)
  // }
  // RejectedSecondaryCustomer(id: number){
  //   return this.http.put<SecondaryCustomer>(this.API_PATH + '/rejectes'+ id , this.options);
  // }
  RejectedSecondaryCustomers(ids: number[]) {
    return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/rejectes', ids, this.options);
  }
  // ApprovedSecondaryCustomer(id: number){
  //   return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/approved'+ id , this.options);
  // }
  ApprovedsSecondaryCustomer(ids: number[]) {
    return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/approved', ids, this.options);
  }
  // ReOpenSecondaryCustomer(id: number){
  //   return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/reOpen'+ id , this.options);
  // }
  ReOpensSecondaryCustomer(ids: number[]) {
    return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/reOpen', ids, this.options);
  }
  // DeactivateSecondaryCustomer(id: number){
  //   return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/deactivate'+ id , this.options);
  // }
  DeactivatesSecondaryCustomer(ids: number[]) {
    return this.http.put<SecondaryCustomer[]>(this.API_PATH + '/deactivate', ids, this.options);
  }
}
