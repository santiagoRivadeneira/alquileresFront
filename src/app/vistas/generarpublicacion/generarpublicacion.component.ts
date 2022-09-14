import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';

@Component({
  selector: 'app-generarpublicacion',
  templateUrl: './generarpublicacion.component.html',
  styleUrls: ['./generarpublicacion.component.css']
})
export class GenerarpublicacionComponent implements OnInit {

  valor1: string = "";
  valor2: string = "";
  aux: boolean = false;


  constructor(public cargarImg: CargarimagenesService, public router: Router) {}

  enviar(){
    this.cargarImg.objetoPublicacionService.push(this.valor1, this.valor2);
    this.aux = true;
    this.cargarImg.aux = true;
    this.router.navigate(["/home"]);
  }

  ngOnInit(): void {
  }

}
