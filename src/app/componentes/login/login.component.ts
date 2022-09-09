import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: string = "";
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    contrasena: new FormControl ('', [Validators.required, Validators.minLength(5)])
  })

  constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router) { }

  onResetForm(){
    this.contactForm.reset();
   }

   onSaveForm(){
    this.srvLogin.email = this.Email; //se envia el nombre de usuario
    this.onResetForm();
  }
   
   get contrasena() { return this.contactForm.get('contrasena'); }
   get email() { return this.contactForm.get('email'); }

   mostrarError(){
    console.log("cerrado");
   }
   
  ngOnInit(): void {}

 
}
