import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AgendarCitaComponent } from './component/paciente/agendar-cita/agendar-cita.component';
import { ConsultarCitaComponent } from './component/paciente/consultar-cita/consultar-cita.component';
import { EliminarCitaComponent } from './component/paciente/eliminar-cita/eliminar-cita.component';
import { HomeComponent } from './component/paciente/home/home.component';
import { ModificarCitaComponent } from './component/paciente/modificar-cita/modificar-cita.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'agendarCita', component: AgendarCitaComponent},
  {path: 'consultarCita', component: ConsultarCitaComponent},
  {path: 'modificarCita', component: ModificarCitaComponent},
  {path: 'cancelarCita', component: EliminarCitaComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
