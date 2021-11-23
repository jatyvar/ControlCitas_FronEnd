import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-cita',
  templateUrl: './eliminar-cita.component.html',
  styleUrls: ['./eliminar-cita.component.css']
})
export class EliminarCitaComponent implements OnInit {

//  public eliminarCita(id:number){
//    this.eliminarCitas.services.eliminarCitas(id).then( response =>{
//      if(response.message == "deleted")
//      alert('Cita Eliminada')
//    })
//  }
  constructor() { }

  ngOnInit(): void {
  }

}
