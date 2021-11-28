import { Component, OnInit } from '@angular/core';
import { ConsultarCitasService } from 'src/app/services/citas/consultar-citas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  public formGroupCita: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder, private citaService: ConsultarCitasService, private router: Router) { }

  ngOnInit(): void {
    console.log('Ingresa a componente cita')
    this.buildForm();
  }

  private buildForm() {
    this.formGroupCita = this.formbuilder.group({
      documento: ['Identificacion', Validators.required],
      nombre: ['Nombre Paciente', Validators.required],
      apellido: ['Apellido Paciente', Validators.required],
      tipodoc: ['Tipo'],
      email: ['email@mail.com', Validators.required],
      direccion: ['Dirección', Validators.required],
      ciudad: ['Ciudad', Validators.required],
      celular: ['# Contacto', Validators.required],
      aceptar: ['', Validators.required]
    });
  }

  public agendarCitas() {
    console.log(this.formGroupCita.value);
    this.citaService.agendarCitas(this.formGroupCita.value).then(response => {
      alert('Cita creada correctamente')
      this.router.navigate(['/consultarCita/']);
    }).catch(err => {
      this.router.navigate(['/error']);
    })
  }

}
