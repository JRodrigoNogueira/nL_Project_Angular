import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeByName(id: string) {
    let params = new HttpParams().append('employee', id);
    return this.http.get<any>(`${environment.apiUrl}/funcionario`,{params});
  }

  createEmployee(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/funcionario`, formData);
  }

  findAllPaginated(
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/funcionario/allFuncionarios`, { params });
  }

}
