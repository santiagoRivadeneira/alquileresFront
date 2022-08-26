import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  aux: boolean = true;
  aux2: boolean = true;

  datos1: Array<number>;
  datos2: Array<string>;
  datos3: Array<string>;
  ambientes: number  = 0;
  propiedad: string = '';
  localidad: string = '';

  seleccionLoc: string = '';
  seleccionProp: string = '';
  seleccionAmb: number = 0;

  resultadoBusqueda: string ="";

  ocultarValores: boolean = true;

  constructor() { 
    this.datos1 = [1,2,3];
    this.datos2 = ["Departamento", "Casa"];
    this.datos3 = ["Avellaneda", "Lanus", "Lomas de zamora","Consti"];
  }

  capturarLocalidadd() {
    this.seleccionLoc = this.localidad;
    if(this.seleccionLoc){
      this.localidad = this.seleccionLoc;

      let nombre: string = this.seleccionLoc;
      sessionStorage.setItem("Nombre" , nombre);
    }

    if(!this.seleccionLoc){
      this.localidad = "todas las localidades";

      let nombre: string = "todas las localidades";
      sessionStorage.setItem("Nombre" , nombre);
    }
    return this.seleccionLoc;
  }


  capturarPropiedad() {
    this.seleccionProp = this.propiedad;
    if(this.seleccionProp){
      this.propiedad = this.seleccionProp;

      let propiedad: string = this.seleccionProp;
      sessionStorage.setItem("Propiedad" , propiedad);
    }

    if(!this.seleccionProp){
      this.seleccionProp = "todas las propiedades";
      this.propiedad = this.seleccionProp;

      let propiedad2: string = "todas las propiedades";
      sessionStorage.setItem("Propiedad" , propiedad2);
    }
    // console.log("Se selecciono ",this.verSeleccion," como propiedad");
    return this.seleccionProp;
  }


  capturarAmb() {
    this.seleccionAmb = this.ambientes;
    if(this.seleccionAmb==0){
      this.ambientes = 0;

      let ambientes: string = "todos los ambientes";
      sessionStorage.setItem("Ambientes" , ambientes);
    }

    if(this.seleccionAmb>0){
      this.ambientes = this.seleccionAmb;
      let amb: number = this.seleccionAmb;

      let toString = amb.toString();
      sessionStorage.setItem("Ambientes" , toString);
    }
    // console.log("Se selecciono ",this.verSeleccion," ambientes");
    return this.seleccionAmb;
  }


  mostrarLoc(){
    var loc = sessionStorage.getItem('Nombre');
    return loc;
  }


  mostrarProp(){
    var prop = sessionStorage.getItem('Propiedad');
    return prop;
  }


  mostrarAmb(){
    var amb = sessionStorage.getItem('Ambientes');
    return amb;
  }

}
