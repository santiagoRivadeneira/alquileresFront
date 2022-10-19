import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ResultadosService } from 'src/app/servicios/resultados.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(public srv2: ServicioService, public resultadoSrv: ResultadosService) { }

  public resultados = []


  cambiarBusqueda(){
    this.srv2.aux2 = false;
    this.srv2.ocultarValores = false;

    //seleccion de localidades
    if(this.srv2.seleccionLoc === ""){
      this.srv2.seleccionLoc = "todas las localidades";
    }

     //seleccion de tipo de propiedad
    if(this.srv2.seleccionProp === ""){
      this.srv2.seleccionProp = "todas las propiedades";
    }

     //seleccion de cantidad de ambientes
    let ambientes: string = "";
    if(this.srv2.seleccionAmb === 0){
      ambientes = "todos los ambientes";
    }else
      if(this.srv2.seleccionAmb > 0 && this.srv2.seleccionAmb < 2){
        ambientes = this.srv2.seleccionAmb+" ambiente"
      }
      else
        if(this.srv2.seleccionAmb > 1){
          ambientes = this.srv2.seleccionAmb+" ambientes"
        }
    
    this.srv2.aux=false;
    this.srv2.resultadoBusqueda = "Resultados para "+this.srv2.seleccionProp+" en "+this.srv2.seleccionLoc+" ,incluyendo "+ambientes+":";
  
    //mostrar filtros en fotos
    // this.srvResultado.resultados();
  
  }

  async Buscar (){

    await axios.post('http://localhost:8080/api/propiedades/filtros', {
      tipoProp: this.srv2.seleccionProp,
      localidad: this.srv2.seleccionLoc
    })
    .then((response) => {
      console.log(response.data);
      this.resultados.push(response.data)
    }, (error) => {

      console.log(error);
    });
  }



  ngOnInit ():  void {



    

  }
}
