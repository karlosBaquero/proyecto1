import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AbonosComponent } from './abonos/abonos.component';
import { CarterasComponent } from './carteras/carteras.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { AgregarConductorComponent } from './agregar-conductor/agregar-conductor.component';
import { OpcionesFiltradoComponent } from './opciones-filtrado/opciones-filtrado.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ListConductoresComponent } from './list-conductores/list-conductores.component';
import {ListaCarterasComponent} from './lista-carteras/lista-carteras.component';
import { CarteraDetailComponent } from './cartera-detail/cartera-detail.component';
import { ListAbonosComponent } from './list-abonos/list-abonos.component';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';
import { ListVehiculosComponent } from './list-vehiculos/list-vehiculos.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { ListPropietariosComponent } from './list-propietarios/list-propietarios.component';
import { AgregarPropietarioComponent } from './agregar-propietario/agregar-propietario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AbonosComponent,
    CarterasComponent,
    ConductoresComponent,
    VehiculosComponent,
    AgregarConductorComponent,
    OpcionesFiltradoComponent,
    FiltroPipe,
    ListConductoresComponent,
    ListaCarterasComponent,
    CarteraDetailComponent,
    ListAbonosComponent,
    AgregarVehiculoComponent,
    ListVehiculosComponent,
    PropietariosComponent,
    ListPropietariosComponent,
    AgregarPropietarioComponent,
    VehiculoDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
