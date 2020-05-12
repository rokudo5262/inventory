import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeResponsibility } from '@app/@core/data';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResponsibilitiesService {
  API_PATH = 'http://localhost:5000/api/employeeresponsibilities';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  employeeresponsibility: EmployeeResponsibility;
  employeeresponsibilities: EmployeeResponsibility[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_employee_responsibilities(): Observable<EmployeeResponsibility[]> {
    return this.http.get<EmployeeResponsibility[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  get_employee_responsibility(): Observable<EmployeeResponsibility[]> {
    return this.http.get<EmployeeResponsibility[]>(
      this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_employee_responsibility(lineId: number) {
    return this.http.delete<EmployeeResponsibility>(
      this.API_PATH + '/' + lineId, this.options);
  }
  // ----------------------------------------------------------------------------------------
  update_employe_responsibility(changes: Partial<EmployeeResponsibility>) {
    return this.http.put<EmployeeResponsibility>(
      this.API_PATH + '/' + changes.lineId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  remove_employee_responsibility(changes: Partial<EmployeeResponsibility>) {
    return this.http
      .put<EmployeeResponsibility>(
        this.API_PATH + '/' + changes.lineId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  add_employee_responsibility(employeeresponsibility: EmployeeResponsibility) {
    return this.http.post<EmployeeResponsibility>(
      this.API_PATH, employeeresponsibility, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_multiple_employee_responsibility(lineIds: number[]) {
    return this.http.put<EmployeeResponsibility[]>(
      this.API_PATH + '/delete', lineIds, this.options);
  }
  // ----------------------------------------------------------------------------------------
}
