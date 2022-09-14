import { Component, OnInit } from '@angular/core';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css']
})
export class RecientesComponent implements OnInit {


  constructor(public cargarImg: CargarimagenesService) {}


  ngOnInit(): void {}

}
