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
    const url = `${environment.apiUrl}/consularCita/`;
    return this.http.get(url).toPromise();
  }

  public agendarCitas(cita: any) {
    console.log('Ingresa a service cita');
    const url = `${environment.apiUrl}/agendarCita`;
    return this.http.post(url, cita).toPromise();
  }

  public cancelarCitas(id: number): Promise<any> {
    return this.http.delete(`${environment.apiUrl}/cancelarCita/${id}`).toPromise();
  }





}
