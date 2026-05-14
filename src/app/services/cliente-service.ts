import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/models/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private apiUrl = 'http://localhost:3000/api/clientes';
  private http = inject(HttpClient);

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  actualizarCliente(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}