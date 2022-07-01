import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {}

  getVehicleByPlaca(id: string) {
    let params = new HttpParams().append('placa', id);
    return this.http.get<any>(`${environment.apiUrl}/veiculo`,{params});
  }

 createVehicle(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/veiculo`, formData);
  }

  findAllPaginated(
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/veiculo/allVeiculos`, { params });
  }

  deleteVehicle(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/veiculo/${id}`);
  }

  getVehicleById(id: number){
    return this.http.get<any>(`${environment.apiUrl}/veiculo/${id}`);
  }

  updateVehicle(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/veiculo/${id}`, formData);
  }
  
}
