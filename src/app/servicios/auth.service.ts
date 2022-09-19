import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private router: Router) { }

  async CreateUser (correo, contraseña){

    await axios.post('http://localhost:8080/api/usuarios', {
      email: correo,
      contraseña: contraseña
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token)
      this.router.navigate(["/home"])
    }, (error) => {

      console.log(error);
    });
  }



  async IniciarSesion (correo, contraseña){

    await axios.post('http://localhost:8080/api/usuarios/login', {
      email: correo,
      contraseña: contraseña
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      this.router.navigate(["/home"])

    }, (error) => {

      console.log(error);
    });
  }


  CerrarSesion(){
    return !!localStorage.getItem('token');
  }






  

}
