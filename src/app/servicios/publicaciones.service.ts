import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';



@Injectable({
  providedIn: 'root'
})


export class PublicacionesService {


  constructor(public router: Router) {}

  private api = "http://localhost:8080/api"
  private token = localStorage.getItem("token");
  


  public Publicaciones = []



  async CrearPublicacion (precio, localidad, direccion, numeroAmb) {

  
  await axios.post(`${this.api}/publicaciones/`, {
    precio,
    localidad,
    direccion,
    numeroAmb
  }, { headers: { Authorization: `Bearer ${this.token}` } })
  .then((response) => {
    this.router.navigate(["/home"]);
    console.log(response);
  }, (error) => {
    console.log("El usuario se creo correctamente")
    console.log(error);
  });

  }
  

}
