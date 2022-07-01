import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  getVisitorByName(id: string) {
    let params = new HttpParams().append('visitor', id);
    return this.http.get<any>(`${environment.apiUrl}/visitante`,{params});
  }

  createVisitor(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/visitante`, formData);
  }

  findAllPaginated(
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/visitante/allVisitantes`, { params });
  }

  deleteVisitor(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/visitante/${id}`);
  }

  getVisitorById(id: number){
    return this.http.get<any>(`${environment.apiUrl}/visitante/${id}`);
  }

  updateVisitor(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/visitante/${id}`, formData);
  }
}
