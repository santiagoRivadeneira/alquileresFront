import { Component, OnInit } from '@angular/core';
import { PropiedadService } from 'src/app/servicios/propiedad.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {

  precio: number;
  direccion: string;
  ambientes: number;
  localidad: string;
  casa: boolean = false;

  images = [
    // {
    //   imageSrc:
    //       'https://www.infobae.com/new-resizer/bwmmjVLtgb0_t5PCIwSo_aFQre0=/cloudfront-us-east-1.images.arcpublishing.com/infobae/JE6PZ22NAZFC7AKSUBB4MYR64Q.png',
    //       imageAlt: 'img1',
    // },

    {
      imageSrc: this.srvProp.imagen,
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

  

  constructor(public srv: ServicioService, public srvProp : PropiedadService) {
    this.precio = srvProp.precio;
    this.direccion = srvProp.direccion;
    this.ambientes = srvProp.ambientes;
    this.localidad = srvProp.localidad;
  }
 
  ngOnInit(): void {
  }

}
