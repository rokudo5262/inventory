import { Injectable } from '@angular/core';
import { ProductGroupDetail } from '@app/@core/data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupDetailService {
  API_PATH = 'http://localhost:5000/api/productgroupdetail';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  constructor(private http: HttpClient) { }
  getProductGroupDetails(): Observable<ProductGroupDetail[]> {
    return this.http.get<ProductGroupDetail[]>(this.API_PATH);
  }
  updateProductGroupDetail(changes: Partial<ProductGroupDetail>) {
    return this.http.put<ProductGroupDetail>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  addProductGroupDetail(productgroup: ProductGroupDetail) {
    return this.http.post<ProductGroupDetail>(this.API_PATH, productgroup, this.options);
  }
  removeProductGroupDetail(id: number) {
    return this.http.delete<ProductGroupDetail>(this.API_PATH + '/' + id, this.options);
  }
}
