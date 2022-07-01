import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) {}

  getResidentByName(id: string) {
    let params = new HttpParams().append('name', id);
    return this.http.get<any>(`${environment.apiUrl}/morador/nome`,{params});
  }

  createResident(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/morador`, formData);
  }

  findAllPaginated(
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/morador/allMoradores`, { params });
  }

  deleteResident(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/morador/${id}`);
  }

  getResidentById(id: number){
    return this.http.get<any>(`${environment.apiUrl}/morador/${id}`);
  }

  updateResident(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/morador/${id}`, formData);
  }
}
