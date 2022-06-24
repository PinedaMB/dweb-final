import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'https://capacitateengenero.iqm.gob.mx/';

  constructor( private httpClient: HttpClient) { }

  public getCursos() {
    return this.httpClient.get(`${this.API_URL}apiCursos`);
  }

  public login(user: object) {
    return this.httpClient.post(`${this.API_URL}apiLogin`, user);
  }

  public updateUser(user: object, id: number) {
    return this.httpClient.put(`${this.API_URL}apiUsuarios/${id}`, user);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(`${this.API_URL}apiUsuarios/${id}`);
  }

  public register(user: object) {
    return this.httpClient.post(`${this.API_URL}apiRegistrarse`, user);
  }
}
