import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';
import { UserService } from 'src/app/servicios/user.service';
import {AuthService}  from "../../servicios/auth.service"




import axios from "axios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios = [];
  correo: string = "";
  contrasena: string = "";

  constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router, private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {


   axios.get('http://localhost:8080/api/publicaciones/obtener')
    .then((response) => {
      console.log(response.data);
      this.usuarios.push(response.data)
    }, (error) => {
      console.log(error);
    });
    
    
  }




//funciona pero falta hacerlo mas generico  y separarlo en archivos(saber si el usuario es valido usar GET)

    onSubmit = async() => {
      this.authService.IniciarSesion(this.correo, this.contrasena)
    }










































  // Email: string = "";
  // emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // contactForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
  //   contrasena: new FormControl ('', [Validators.required, Validators.minLength(5)])
  // })

  // constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router) { }

  // onResetForm(){
  //   this.contactForm.reset();
  //  }

  //  onSaveForm(){
  //   this.srvLogin.email = this.Email; //se envia el nombre de usuario
  //   this.onResetForm();
  // }
   
  //  get contrasena() { return this.contactForm.get('contrasena'); }
  //  get email() { return this.contactForm.get('email'); }

  //  mostrarError(){
  //   console.log("cerrado");
  //  }
   
 
}
