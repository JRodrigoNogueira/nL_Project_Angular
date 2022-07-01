import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { pf } from './../../authentication/models/pf'

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {

  constructor(private http: HttpClient) { }

  createPf(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/pessoaFisica`, formData);
  }

  getPfById(id: number){
    return this.http.get<pf>(`${environment.apiUrl}/pessoaFisica/${id}`);
  }

  updatePf(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/pessoaFisica/${id}`, formData);
  }

  findAllPaginated(
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/pessoaJuridica/allPessoaJuridica`, { params });
  }

  deletePF(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/pessoaFisica/${id}`);
  }

}
