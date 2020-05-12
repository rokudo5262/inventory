import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplyForHeader } from '@appdata';

@Injectable({
  providedIn: 'root',
})
export class ApplyForHeaderService {
  API_PATH = 'http://localhost:5000/api/applyforheaders';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  applyForHeader: ApplyForHeader;
  applyForHeaders: ApplyForHeader[];
  constructor(private http: HttpClient) {

  }

  getApplyForHeaders(): Observable<ApplyForHeader[]> {
    return this.http.get<ApplyForHeader[]>(this.API_PATH, this.options);
  }
  getApplyForHeader(): Observable<ApplyForHeader> {
    return this.http.get<ApplyForHeader>(this.API_PATH, this.options);
  }
  addApplyForHeader(applyForHeader: ApplyForHeader) {
    return this.http.post<ApplyForHeader>(this.API_PATH, applyForHeader, this.options);
  }
  update(changes: Partial<ApplyForHeader>) {
    return this.http.put<ApplyForHeader>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  updateDelete(id: number) {
    return this.http.put<ApplyForHeader>(this.API_PATH + '/delete/' + id, this.options);
  }
}
