import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {}

  getVehicleByPlaca(id: string) {
    let params = new HttpParams().append('placa', id);
    return this.http.get<any>(`${environment.apiUrl}/veiculo`,{ params });
  }

  createCustomer(formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/api/customer/`, formData);
  }

  updateCustomer(formData: Object, id: number) {
    return this.http.put<any>(`${environment.apiUrl}/api/customer/${id}`, formData);
  }

  deleteCustomer(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/api/customer/${id}`);
  }

  findCustomerByDescription(customer: Object) {
    return this.http.get<any>(`${environment.apiUrl}/api/customer/findByDescription/`, customer);
  }
}
