import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { pj } from './../../authentication/models/pj';
import { avalia } from './../../authentication/models/avalia';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  constructor(private http: HttpClient) { }

  createPj(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/pessoaJuridica`, formData);
  }

  getPjById(id: any){
    return this.http.get<pj>(`${environment.apiUrl}/pessoaJuridica/${id}`);
  }

  updatePj(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/pessoaJuridica/${id}`, formData);
  }

  findAllPj(){
    return this.http.get<pj[]>(`${environment.apiUrl}/pessoaJuridica`)
  }

  findAllAvalia(){
    return this.http.get<avalia[]>(`${environment.apiUrl}/avaliacao`)
  }

  deletePJ(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/pessoaJuridica/${id}`);
  }

}
