import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  localidad: string = "";
  propiedad: string = "";
  respuesta: string = "";
  otraRespuesta: string = "";
  mostrarPorDefecto: boolean = true;
  datos;

  images = [
    {
      imageSrc:
          'https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg',
          imageAlt: 'img1',
    },
    {
      imageSrc:
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/219805888.jpg?k=425fdaa53da5c0b52037d6337d670a21c68aaa2f7bde5c27f40ab8b5d5fbe091&o=',
        imageAlt: 'img2',
    },
    {
      imageSrc:
        'https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg',
        imageAlt: 'img3',
    },
    {
      imageSrc:
        'https://imganuncios.mitula.net/dos_ambientes_con_patio_y_cochera_complejo_santa_luisa_6740009657800316221.jpg',
        imageAlt: 'img4',
    },
  ]

  constructor(public srv: AutenticacionService, public srv2: ServicioService) {
    this.datos = ["normal"];
  }

  mostrarValorIngresado() {
    if(!this.srv2.ocultarValores){
    switch(this.srv.propiedad){
      case "casa":
      case "departamento":
      this.respuesta="Resultados de busqueda para "+this.srv.propiedad+"s";
      break;
      case "todas las propiedades": 
      this.respuesta="Resultados de busqueda para todos los tipos de propiedades";
      break;
    }

    switch(this.srv.localidad){
      case "Avellaneda":
      case "Lanus":
      case "Lomas de zamora":
      case "Consti":
      this.otraRespuesta="en la localidad de "+this.srv.localidad;
      break;
      case "todas las localidades": 
      this.otraRespuesta="en todas las localidades:";
      break;
    }
    this.localidad = this.srv.localidad;
    this.propiedad = this.srv.propiedad;}
  }

  ngOnInit(): void { 
    this.mostrarValorIngresado();
  }

}
