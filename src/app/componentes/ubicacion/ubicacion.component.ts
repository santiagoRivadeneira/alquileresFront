import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  aux: boolean = true;
  aux2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
