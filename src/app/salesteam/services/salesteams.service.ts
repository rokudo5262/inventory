import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesTeam } from '@app/@core/data/salesteam';

@Injectable({
  providedIn: 'root',
})
export class SalesTeamsService {
  API_PATH = 'http://localhost:5000/api/salesteams';
  // API_PATH_2 = 'http://localhost:5000/api/salesteambins/salesteamdetails';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  salesteam: SalesTeam;
  salesteams: SalesTeam[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_salesteams(): Observable<SalesTeam[]> {
    return this.http.get<SalesTeam[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  get_salesteam(): Observable<SalesTeam[]> {
    return this.http.get<SalesTeam[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_salesteam(salesTeamCode: string) {
    return this.http.delete<SalesTeam>(
      this.API_PATH + '/' + salesTeamCode, this.options);
  }
  // ----------------------------------------------------------------------------------------
  // get_salesteam_with_bin(): Observable<SalesTeam[]>  {
  //   return this.http.get<SalesTeam[]>(
  // this.API_PATH_2, this.options);
  // }
  // ----------------------------------------------------------------------------------------
  // get_salesteam_with_bin_by_id(salesTeamCode:string): Observable<SalesTeam[]>  {
  //   return this.http.get<SalesTeam[]>(
  // this.API_PATH_2+ '/' + salesTeamCode, this.options);
  // }
  // ----------------------------------------------------------------------------------------
  update_salesteam(changes: Partial<SalesTeam>) {
    return this.http.put<SalesTeam>(
      this.API_PATH + '/' + changes.salesTeamCode, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  remove_salesteam(changes: Partial<SalesTeam>) {
    return this.http.put<SalesTeam>(
      this.API_PATH + '/' + changes.salesTeamCode, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  add_salesteam(salesteam: SalesTeam) {
    return this.http.post<SalesTeam>(
      this.API_PATH, salesteam, this.options);
  }
  // ----------------------------------------------------------------------------------------
}
