import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { ErrorComponent } from './vistas/error/error.component';
import { InmueblesComponent } from './vistas/inmuebles/inmuebles.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full' },
  {path:"home", component: HomeComponent},
  {path:"registro", component: RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"ubicacion", component: UbicacionComponent},
  {path:"busqueda", component: BusquedaComponent},
  {path:"resultados", component: ResultadosComponent},
  {path:"error", component: ErrorComponent},
  {path:"miperfil", component: UsuariosComponent},
  {path:"inmuebles", component: InmueblesComponent},
  {path: "**", redirectTo: "error", pathMatch: 'full'} //tiene que ir a pantalla error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
