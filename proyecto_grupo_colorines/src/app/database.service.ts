import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost/punto_de_venta/config/db.php';

  constructor(private http: HttpClient) { }

  login(nombreUsuario: string, contrasena: string): Observable<any> {
    const formData = { nombreUsuario, contrasena };
    return this.http.post<any>(this.apiUrl, formData);
  }
}
