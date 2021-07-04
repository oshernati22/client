import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({  //service that help us send assiments to the server 
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44312/api/EmployeesApi";
  // readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/GetEmployee');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/PostEmployee', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/PutEmployee', val);
  }

  deleteEmployee(val: any) {
    return this.http.post(this.APIUrl + '/DeleteEmployee', val);

  }

  calcSalry(val: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/CalculateSalary', val);
  }


  /*UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }*/


}