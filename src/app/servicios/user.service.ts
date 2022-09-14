import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


    //agregar una propiedad a la base de datoss de firestone
    async CreateUser(correo, contrasena) {

      await axios.post('http://localhost:8080/api/usuarios', {
        email: correo,
        contraseña : contrasena
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }


    async Login(correo, contrasena) {

      await axios.post('http://localhost:8080/api/usuarios/login', {
        email: correo,
        contraseña : contrasena
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }

  


}
