import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { BusquedaComponent } from '../busqueda/busqueda.component';

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


 

  ngOnInit(): void { 
   
  }

}
