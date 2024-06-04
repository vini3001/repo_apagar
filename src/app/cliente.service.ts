import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './models/Cliente';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Array<Cliente> = []
  urlApi = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public inserir(cliente: Cliente) {
    return this.http.post<boolean>(this.urlApi + 'cliente', cliente);
  }

  public alterar(id: number, cliente: Cliente) {
    return this.http.put<boolean>(this.urlApi + 'cliente/' + id, cliente);
  }

  public deletar(id: number) {
    return this.http.delete<boolean>(this.urlApi + 'cliente/' + id);
  }

  public obterPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlApi + 'cliente/' + id);
  }

  public obterTodos(): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlApi + 'clientes');
  }
}
