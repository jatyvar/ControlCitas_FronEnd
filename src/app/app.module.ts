import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/paciente/home/home.component';
import { AgendarCitaComponent } from './component/paciente/agendar-cita/agendar-cita.component';
import { ConsultarCitaComponent } from './component/paciente/consultar-cita/consultar-cita.component';
import { EliminarCitaComponent } from './component/paciente/eliminar-cita/eliminar-cita.component';
import { ModificarCitaComponent } from './component/paciente/modificar-cita/modificar-cita.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendarCitaService } from './services/citas/agendar-cita.service';
import { ConsultarCitasService } from './services/citas/consultar-citas.service';
import { EliminarCitaService } from './services/citas/eliminar-cita.service';
import { ModificarCitaService } from './services/citas/modificar-cita.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    AgendarCitaComponent,
    ConsultarCitaComponent,
    EliminarCitaComponent,
    ModificarCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AgendarCitaService, ConsultarCitasService, EliminarCitaService, ModificarCitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
