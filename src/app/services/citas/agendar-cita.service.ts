import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AgendarCitaService {

  constructor(private http: HttpClient) { }

  public consultarCitas(): Promise<any> {
      const url = `${environment.apiUrl}/agendarrCita`;
      return this.http.get(url).toPromise();
  }    

  // public agendarCita(cancion: any): Promise<any> {
 //   const url = `${environment.apiUrl}/agendarCita`;
 //   return this.http.post(url, cancion).toPromise();
 // }

}
