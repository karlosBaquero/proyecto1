import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonosComponent } from './abonos/abonos.component';
import { CarterasComponent } from './carteras/carteras.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { AgregarConductorComponent } from './agregar-conductor/agregar-conductor.component';
import { AgregarVehiculoComponent} from'./agregar-vehiculo/agregar-vehiculo.component';
import { AgregarPropietarioComponent} from './agregar-propietario/agregar-propietario.component';
import { PropietariosComponent} from './propietarios/propietarios.component'; 
import {CarteraDetailComponent} from './cartera-detail/cartera-detail.component';
import {VehiculoDetailComponent} from './vehiculo-detail/vehiculo-detail.component';
const routes: Routes = [
    {
        path: 'abonos',
        component: AbonosComponent
    },
    {
        path: 'carteras',
        component: CarterasComponent
    },
    {
        path: 'detail/:id',
        component: CarteraDetailComponent
    },
    {
        path: 'VehiculoDetail/:id',
        component: VehiculoDetailComponent
    },
    {
        path: 'agregarConductor',
        component: AgregarConductorComponent
    },
    {
        path: 'agregarPropietario',
        component: AgregarPropietarioComponent
    },
    {
        path: 'agregarVehiculo',
        component: AgregarVehiculoComponent
    },
    {
        path: 'conductores',
        component: ConductoresComponent
    },
    {
        path: 'vehiculos',
        component: VehiculosComponent
    },
    {
        path: 'propietarios',
        component: PropietariosComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }