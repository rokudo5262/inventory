import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CodeDetail } from '@appdata';

@Injectable({
  providedIn: 'root',
})
export class CodeDetailService {
  API_PATH = 'http://localhost:5000/api/codedetails';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  codeDetail: CodeDetail;
  codeDetails: CodeDetail[];
  constructor(private http: HttpClient) { }
  getCodeDetails(): Observable<CodeDetail[]> {
    return this.http.get<CodeDetail[]>(this.API_PATH, this.options);
  }
  addCodeDetail(codeDetail: CodeDetail) {
    return this.http.post<CodeDetail>(this.API_PATH, codeDetail, this.options);
  }
  update(changes: Partial<CodeDetail>) {
    return this.http.put<CodeDetail>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  updateDelete(id: number) {
    return this.http.put<CodeDetail>(this.API_PATH + '/delete' + id, this.options);
  }
  updateDeletes(ids: number[]) {
    return this.http.put<CodeDetail[]>(this.API_PATH + '/delete' + ids, this.options);
  }
  getCodeDetailsss(codeMasterId: number): Observable<CodeDetail[]> {
    return this.http.get<CodeDetail[]>(this.API_PATH + '/' + codeMasterId, this.options);
  }
}
