import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';

@Component({
  selector: 'app-generarpublicacion',
  templateUrl: './generarpublicacion.component.html',
  styleUrls: ['./generarpublicacion.component.css']
})
export class GenerarpublicacionComponent implements OnInit {

  precio: string = "";
  localidad: string = "";
  direccion: string = "";
  numeroAmb: string = ""


  constructor(public cargarImg: CargarimagenesService, public router: Router, private publicacionService: PublicacionesService) {}
/*
  enviar(){
    this.cargarImg.objetoPublicacionService.push(this.valor1, this.valor2);
    this.aux = true;
    this.cargarImg.aux = true;
    this.router.navigate(["/home"]);
  }
*/



  onSubmit = async() => {
    this.publicacionService.CrearPublicacion
    (
      this.precio, 
      this.localidad, 
      this.direccion, 
      this.numeroAmb
    )

  }


  ngOnInit(): void {
  }

}
