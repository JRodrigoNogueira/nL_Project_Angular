import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { pf } from '../models/pf';
import { pj } from '../models/pj';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  findAllPf(){
    return this.http.get<pf[]>(`${environment.apiUrl}/pessoaFisica`)
  }

  findAllPj(){
    return this.http.get<pj[]>(`${environment.apiUrl}/pessoaJuridica`)
  }

}
