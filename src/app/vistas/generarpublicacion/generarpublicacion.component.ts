import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';

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


  constructor(public cargarImg: CargarimagenesService, public router: Router) {}
/*
  enviar(){
    this.cargarImg.objetoPublicacionService.push(this.valor1, this.valor2);
    this.aux = true;
    this.cargarImg.aux = true;
    this.router.navigate(["/home"]);
  }
*/



  onSubmit = async() => {

    await axios.post('http://localhost:8080/api/publicaciones/', {
      precio: this.precio,
      localidad : this.localidad,
      direccion: this.direccion,
      numeroAmb: this.numeroAmb
    })
    .then((response) => {
      this.router.navigate(["/home"]);
      console.log(response);
    }, (error) => {
      console.log("El usuario se creo correctamente")
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
