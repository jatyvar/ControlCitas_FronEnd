import { Component, OnInit } from '@angular/core';
import { cancelarCitaModel } from 'src/app/models/cancelarCita';
import { EliminarCitaService } from 'src/app/services/citas/eliminar-cita.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-eliminar-cita',
  templateUrl: './eliminar-cita.component.html',
  styleUrls: ['./eliminar-cita.component.css']
})
export class EliminarCitaComponent implements OnInit {

  /*public eliminarCita(id: number) {
    this.EliminarCitaService.eliminarCitas(id).then(response => {
      if (response.message == "deleted")
        alert('Cita Eliminada')
    })
  }
  constructor() { }
*/
  ngOnInit(): void {
  }

}
