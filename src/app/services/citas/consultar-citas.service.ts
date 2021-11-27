import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCitasService {

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
 //   return this.http.get(url, {headers, params}).toPromise();
 //}
 // public obtenerCita(id: number){}

 

 

}
