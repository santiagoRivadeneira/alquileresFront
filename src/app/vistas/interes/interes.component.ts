import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propiedad } from 'src/app/clases/propiedad';
import { PropiedadService } from 'src/app/servicios/propiedad.service';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent implements OnInit {

  public propiedad: Propiedad = new Propiedad;
  public propiedad2: Propiedad = new Propiedad;
  public propiedad3: Propiedad = new Propiedad;

  imagen1: string ="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg";
  imagen2: string ="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg";
  imagen3: string ="https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg";
  
  constructor(public router: Router, public srvProp : PropiedadService) { 
    this.propiedad.precio = 320000;
    this.propiedad.direccion = "Av. Cabildo 23";
    this.propiedad.ambientes = 4;
    this.propiedad.localidad = "Villa Dominico, Avellaneda";

    this.propiedad2.precio = 430000;
    this.propiedad2.direccion = "Av. Monroe 545";
    this.propiedad2.ambientes = 4;
    this.propiedad2.localidad = "Chingolo, Lanus";

    this.propiedad3.precio = 560000;
    this.propiedad3.direccion = "Av. Belgrano 3234";
    this.propiedad3.ambientes = 2;
    this.propiedad3.localidad = "Gerli, Avellaneda";
  }

  enviarInmueble(id: number){
    switch(id){
      case 1:
        this.srvProp.precio = this.propiedad.precio;
        this.srvProp.direccion = this.propiedad.direccion;
        this.srvProp.ambientes = this.propiedad.ambientes;
        this.srvProp.localidad = this.propiedad.localidad;
        this.srvProp.imagen = this.imagen1;
        break;
      case 2:
        this.srvProp.precio = this.propiedad2.precio;
        this.srvProp.direccion = this.propiedad2.direccion;
        this.srvProp.ambientes = this.propiedad2.ambientes;
        this.srvProp.localidad = this.propiedad2.localidad;
        this.srvProp.imagen = this.imagen2;
        break;
      case 3:
        this.srvProp.precio = this.propiedad3.precio;
        this.srvProp.direccion = this.propiedad3.direccion;
        this.srvProp.ambientes = this.propiedad3.ambientes;
        this.srvProp.localidad = this.propiedad3.localidad;
        this.srvProp.imagen = this.imagen3;
        break;
    }
    this.srvProp.idPropiedad = 1;
    this.router.navigate(["/inmuebles"]);
  }

  ngOnInit(): void {
  }

}
