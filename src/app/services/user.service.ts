// Importaciones nécessarias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Servicio de usuarios
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }

  // Método de registro
  register(registerData: any): any {
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }
}
