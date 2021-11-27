import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresas.model';

const baseUrl = 'http://localhost:8080/node/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(baseUrl);
  }

  get(id: any): Observable<Empresas> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


  findByTitle(cnpj: number): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(`${baseUrl}?cnpj=${cnpj}`);
  }
}

