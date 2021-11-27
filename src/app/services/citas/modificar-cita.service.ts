import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModificarCitaService {

  constructor(private http: HttpClient) { }

  public consultarCitas(): Promise<any> {
      const url = `${environment.apiUrl}/consultarCita`;
      return this.http.get(url).toPromise();
      
    //  const headers: HttpHeaders = new HttpHeaders({
    //  isadmin: 'true'
    //});
  // const params = {
  // idcita: 1,
  }
  
 // public actualizarCancion(cancion: consultarCitaModel): Promise<any> {
 //   const url = `${environment.apiUrl}/modificarCita/${cancion.idcanciones}`
 //   return this.http.put(url, cancion).toPromise();
 // }
}
