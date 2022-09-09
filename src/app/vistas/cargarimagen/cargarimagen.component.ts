import { Component, OnInit } from '@angular/core';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';

@Component({
  selector: 'app-cargarimagen',
  templateUrl: './cargarimagen.component.html',
  styleUrls: ['./cargarimagen.component.css']
})
export class CargarimagenComponent implements OnInit {

  constructor(public cargarImg: CargarimagenesService) { }
  
  ngOnInit(): void {
  }

}
