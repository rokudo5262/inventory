import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CodeMaster } from '@appdata';

@Injectable({
  providedIn: 'root',
})
export class CodeMasterService {
  API_PATH = 'http://localhost:5000/api/codemasters';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  codeMaster: CodeMaster;
  codeMasters: CodeMaster[];
  constructor(private http: HttpClient) {
  }
  getCodeMasters(): Observable<CodeMaster[]> {
    return this.http.get<CodeMaster[]>(this.API_PATH, this.options);
  }
  getCodeMaster(): Observable<CodeMaster> {
    return this.http.get<CodeMaster>(this.API_PATH, this.options);
  }
  addCodeMaster(codeMaster: CodeMaster) {
    return this.http.post<CodeMaster>(this.API_PATH, codeMaster, this.options);
  }
  update(changes: Partial<CodeMaster>) {
    return this.http.put<CodeMaster>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  updateDelete(id: number) {
    return this.http.put<CodeMaster>(this.API_PATH + '/delete' + id, this.options);
  }
  updateDeletes(ids: number[]) {
    return this.http.put<CodeMaster[]>(this.API_PATH + '/delete', ids, this.options);
  }
  updateSystem(id: number) {
    return this.http.put<CodeMaster>(this.API_PATH + '/system' + id, this.options);
  }
  updateSystems(ids: number[]) {
    return this.http.put<CodeMaster[]>(this.API_PATH + '/system', ids, this.options);
  }
}
