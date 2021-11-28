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


  public citas: consultarCitaModel[] = [];
  constructor(private citaService: ConsultarCitasService, private router: Router) { }
  async ngOnInit(): Promise<void> {

    this.citas = await this.consultarCitas();
    console.log(this.citas);

  }
  public async consultarCitas(): Promise<any> {
    try {
      const response = await this.citaService.consultarCitas();
      console.log(response);
      return response.datos;
    } catch (error) {
      this.router.navigate(['/error']);
      console.log(error);
    }
  }

  public cancelarCitas(id: number) {
    this.citaService.cancelarCitas(id).then(async response => {
      if (response.message === 'deleted') {
        this.citas = await this.consultarCitas();
        alert('Cita eliminada correctamente');
      }
    }).catch(error => {
      console.log(error);
    })
  }
}




