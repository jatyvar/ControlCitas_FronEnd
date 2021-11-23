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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
