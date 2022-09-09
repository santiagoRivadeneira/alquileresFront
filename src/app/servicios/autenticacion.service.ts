import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  modal: boolean=false;
  palabraModal: string = "";
  cambioModal: boolean = false;

  nombre : string = '';
  contraseña: string = '';
  localidad: string;
  propiedad: string;
  ambientes: number;
  aux: boolean=false;

  validacionLogin: boolean = false;

  constructor(private router: Router) { 
    this.localidad = 'Avellaneda';
    this.propiedad = 'Casa';
    this.ambientes = 2;
  }

  validarLogin(){
    if(this.validacionLogin){
      console.log("estoy logeado");
    return true;}
    else
    console.log("NO estoy logeado");
    return false;
  }

}
