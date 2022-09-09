import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  precio: number;
  direccion: string;
  ambientes: number;
  localidad: string;
  idPropiedad: number;
  imagen: string;

  constructor() { 
    this.precio = 0;
    this.direccion = "";
    this.ambientes = 0;
    this.localidad = "";
    this.idPropiedad = 0;
    this.imagen = "https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg";
  }
}
