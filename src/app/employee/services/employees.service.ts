import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '@app/@core/data';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  API_PATH = 'http://localhost:5000/api/employees';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  employee: Employee;
  employees: Employee[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  get_employee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_employee(employeeCode: string) {
    return this.http.delete<Employee>(this.API_PATH + '/' + employeeCode, this.options);
  }
  // ----------------------------------------------------------------------------------------
  update_employee(changes: Partial<Employee>) {
    return this.http
      .put<Employee>(this.API_PATH + '/' + changes.employeeCode, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  remove_employee(changes: Partial<Employee>) {
    return this.http
      .put<Employee>(this.API_PATH + '/' + changes.employeeCode, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  add_employee(employee: Employee) {
    return this.http.post<Employee>(this.API_PATH, employee, this.options);
  }
    // ----------------------------------------------------------------------------------------
}
