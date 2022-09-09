import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos1: Array<number>;
  datos2: Array<string>;
  datos3: Array<string>;
  ambientes: number  = 0;
  propiedad: string = '';
  localidad: string = '';
  
  seleccionLoc: string = '';
  seleccionProp: string = '';
  seleccionAmb: number = 0;
  
  images = [
    {
      imageSrc:
          'https://img.freepik.com/fotos-premium/oficina-edificio-moderno-fondo-cielo-azul_35761-198.jpg?w=2000',
            imageAlt: 'img1',
    },
    {
      imageSrc:
        'https://fondosmil.com/fondo/60032.jpg',
         imageAlt: 'img2',
    },
    {
      imageSrc:
        'https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg',
        imageAlt: 'img3',
    },
    {
      imageSrc:
        'https://fondosmil.com/fondo/56628.jpg',
        imageAlt: 'img4',
    },
  ]

  
  constructor(public srv: AutenticacionService, private router: Router,
    public srv2: ServicioService, public srvImg: CargarimagenesService) { 
    this.datos1 = [1,2,3];
    this.datos2 = ["departamento", "casa"];
    this.datos3 = ["Avellaneda", "Lanus", "Lomas de zamora","Consti"];
  }



  validarBusqueda(){
    this.srv2.aux=true;
    this.srv2.aux2=true;
    this.srv2.ocultarValores=false;
    this.capturarLocalidadd();
    this.capturarPropiedad();
    this.router.navigate(["/resultados"]);
  }

  capturarLocalidadd() {
    this.seleccionLoc = this.localidad;
      if(this.seleccionLoc){
        this.srv.localidad = this.seleccionLoc;

        let nombre: string = this.seleccionLoc;
        sessionStorage.setItem("Nombre localidad" , nombre);
        // console.log(nombre);
      }

      if(!this.seleccionLoc){
        this.srv.localidad = "todas las localidades";
  
        let nombre: string = "todas las localidades";
        sessionStorage.setItem("Nombre localidad" , nombre);
        // console.log(nombre);
      }
   return this.seleccionLoc;
  }

  capturarPropiedad() {
    this.seleccionProp = this.propiedad;
    if(this.seleccionProp){
      this.srv.propiedad = this.seleccionProp;
      
      let propiedad: string = this.seleccionProp;
      sessionStorage.setItem("Tipo propiedad" , propiedad);
      // console.log(propiedad);
    }

    if(!this.seleccionProp){
      this.srv.propiedad = "todas las propiedades";

      let propiedad: string = "todas las propiedades";
      sessionStorage.setItem("Tipo propiedad" , propiedad);
      // console.log(propiedad);
    }

    return this.seleccionProp;
  }

  capturarAmb() {
    this.seleccionAmb = this.ambientes;
    this.srv.ambientes = this.ambientes;
    let amb: number = this.seleccionAmb;

    let toString = amb.toString();
    sessionStorage.setItem("Ambientes" , toString);

    return this.seleccionAmb;
  }

  ngOnInit(): void {
    this.srv.modal = true;
  }
  
}
