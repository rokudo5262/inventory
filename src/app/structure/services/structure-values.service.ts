import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StructureValue } from '@app/@core/data/structure-value';

@Injectable({
  providedIn: 'root',
})
export class StructureValuesService {
  API_PATH = 'http://localhost:5000/api/structurevalues';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  structurevalueCookiesString = 'StructureValueS_COOKIES';
  structurevalue: StructureValue;
  structurevalues: StructureValue[];

  constructor(private http: HttpClient) {
  }
  getStructureValues(): Observable<StructureValue[]> {
    return this.http.get<StructureValue[]>(this.API_PATH, this.options);
  }
  addStructureValue(structurevalue: StructureValue) {
    return this.http.post<StructureValue>(this.API_PATH, structurevalue, this.options);
  }
  updateStructureValue(changes: Partial<StructureValue>) {
    return this.http.put<StructureValue>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  deleteStructureValue(id: number) {
    return this.http.delete<StructureValue>(this.API_PATH + '/' + id, this.options);
  }
  deleteStructureValues(ids: number[]) {
    return this.http.put<StructureValue[]>(this.API_PATH + '/delete', ids, this.options);
  }
}
