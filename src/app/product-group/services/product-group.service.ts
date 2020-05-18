import { Injectable } from '@angular/core';
import { ProductGroup } from '@app/@core/data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductGroupService {
  API_PATH = 'http://localhost:5000/api/productgroup';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  productgroup: ProductGroup;
  productgroups: ProductGroup[];
  constructor(private http: HttpClient) { }
  getProductGroups(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(this.API_PATH);
  }
  updateProductGroup(changes: Partial<ProductGroup>) {
    return this.http.put<ProductGroup>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  addProductGroup(productgroup: ProductGroup) {
    return this.http.post<ProductGroup>(this.API_PATH, productgroup, this.options);
  }
  removeProductGroup(id: number) {
    return this.http.delete<ProductGroup>(this.API_PATH + '/' + id, this.options);
  }
}
