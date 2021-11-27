import { Component, OnInit } from '@angular/core';
import { consultarCitaModel } from 'src/app/models/consultarCita';
import { ConsultarCitasService } from 'src/app/services/citas/consultar-citas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.css']
})

export class ConsultarCitaComponent implements OnInit {


  public citas: consultarCitaModel [] = [];
  constructor(private citaService: ConsultarCitasService, private router: Router) {}
    ngOnInit(): void {
      console.log('entra al componente');
      //this.citaService
      
    }
    public async consultarCitas(): Promise<any>{
      
      try{
        const response = await this.citaService.consultarCitas();
        return response.datos;
      }catch(error){ 
        this.router.navigate(['/error']);
      }
    }  
}




