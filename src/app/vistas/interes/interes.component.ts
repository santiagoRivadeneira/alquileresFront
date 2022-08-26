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
        break;
      case 2:
        this.srvProp.precio = this.propiedad2.precio;
        this.srvProp.direccion = this.propiedad2.direccion;
        this.srvProp.ambientes = this.propiedad2.ambientes;
        this.srvProp.localidad = this.propiedad2.localidad;
        break;
      case 3:
        this.srvProp.precio = this.propiedad3.precio;
        this.srvProp.direccion = this.propiedad3.direccion;
        this.srvProp.ambientes = this.propiedad3.ambientes;
        this.srvProp.localidad = this.propiedad3.localidad;
        break;
    }
    this.srvProp.idPropiedad = 1;
    this.router.navigate(["/inmuebles"]);
  }

  ngOnInit(): void {
  }

}
