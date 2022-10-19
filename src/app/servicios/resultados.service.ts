import { Injectable } from '@angular/core';
import axios from 'axios';
import { ServicioService } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  localidad: boolean = false;
  casa: boolean = false;
  dpto: boolean = false;

  constructor(public srv: ServicioService) { }

  /*-------------- aca voy a poner carousel y disitintas selecciones -------------------*/
  
  resultados(){
    // if (this.srv.seleccionLoc !=""){
    //   this.localidad = true;
    // }

    if (this.srv.seleccionProp === "Casa"){
      this.casa = true;
    }

    if (this.srv.seleccionProp === "Departamento"){
      this.dpto = true;
    }
  }









}
