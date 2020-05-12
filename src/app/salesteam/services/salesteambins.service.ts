import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesTeamBin } from '@app/@core/data/salesteambin';

@Injectable({
  providedIn: 'root',
})
export class SalesTeamBinsService {
  API_PATH = 'http://localhost:5000/api/salesteambins';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  salesteambin: SalesTeamBin;
  salesteambins: SalesTeamBin[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_salesteambins(): Observable<SalesTeamBin[]> {
    return this.http.get<SalesTeamBin[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  get_salesteambin(): Observable<SalesTeamBin[]> {
    return this.http.get<SalesTeamBin[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_salesteambin(lineId: number) {
    return this.http.delete<SalesTeamBin>(
      this.API_PATH + '/' + lineId, this.options);
  }
  // ----------------------------------------------------------------------------------------
  update_salesteambin(changes: Partial<SalesTeamBin>) {
    return this.http.put<SalesTeamBin>(
      this.API_PATH + '/' + changes.lineId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  remove_salesteambin(changes: Partial<SalesTeamBin>) {
    return this.http.put<SalesTeamBin>(
      this.API_PATH + '/' + changes.lineId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  add_salesteambin(salesteambin: SalesTeamBin) {
    return this.http.post<SalesTeamBin>(
      this.API_PATH, salesteambin, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_multiple_saleteambin(lineIds: number[]) {
    return this.http.put<SalesTeamBin[]>(
      this.API_PATH + '/delete', lineIds, this.options);
  }
  // ----------------------------------------------------------------------------------------
}
