import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Structure } from '@app/@core/data/structure';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {
  API_PATH = 'http://localhost:5000/api/structures';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors'
    }),
  };
  structureCookiesString = 'StructureS_COOKIES';
  structure: Structure;
  structures: Structure[];

  constructor(private http: HttpClient) {
  }
  getStructures(): Observable<Structure[]> {
    return this.http.get<Structure[]>(this.API_PATH, this.options);
  }
  addStructure(structure: Structure) {
    return this.http.post<Structure>(this.API_PATH, structure, this.options);
  }
  EditStructure(changes: Partial<Structure>) {
    return this.http.put<Structure>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  deleteStructure(id: number) {
    return this.http.delete<Structure>(this.API_PATH + '/' + id, this.options);
  }
  deletesStructure(ids: number[]) {
    return this.http.put<Structure[]>(this.API_PATH + '/delete', ids, this.options);
  }
}
