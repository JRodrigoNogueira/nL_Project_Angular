import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliarService {

  constructor(private http: HttpClient) { }

  createAvaliacao(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/avaliacao`, formData);
  }

}
