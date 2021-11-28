import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EliminarCitaService {

  constructor(private http: HttpClient) { }

  public cancelarCita(): Promise<any> {
    /*const url = `${environment.apiUrl}/cancelarCita`;
    return this.http.get(url).toPromise();*/
    const url = `${environment.apiUrl}/consularCita/`;
    return this.http.get(url).toPromise();


  }



  //  const headers: HttpHeaders = new HttpHeaders({
  //  isadmin: 'true'
  //});
  // const params = {
  // idcita: 1,
}

 // public cancelarCita(id: number): Promise<any> {
 //   return this.http.delete(`${environment.apiUrl}/cancelarCita/${id}`).toPromise();
 // }

