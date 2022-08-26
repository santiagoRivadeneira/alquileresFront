import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  contrasena: string = "";
  respuesta: string = "";
  aux: boolean = false;

  constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.email=this.srv.nombre;
    this.contrasena=this.srv.contraseña;
  }

  enviar(){
    // this.srv.modal = true;
    if(this.email == "" && this.contrasena == ""){
      this.respuesta="Por favor, ingrese los datos";
    }else
    
    if(this.email == "" || this.contrasena == ""){
      this.respuesta="Por favor, ingrese los datos restantes";
    }else
    if(this.email != "" && this.contrasena != ""){
      
      if(this.contrasena.length<6){
        this.respuesta="la contraseña debe ser mas larga";
      }else
      if(!this.email.match(/^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/)){ // aa@a.co por ejemplo
        this.respuesta = "ingrese un email valido";
      }else
      {
        this.respuesta = "";
        this.aux = true;

        // ----------APLICAR GUARDS PARA BOTON---------------->>>>>>>>>>>






        
        
        // this.srv.modal = false;
        // this.router.navigate(["/home"]);
        // this.srv.cambioModal=true;
        // this.srv.cerrarModal();
        
      }
    }
  }

  cerrarModal(){
    this.srvLogin.email = this.email; //se envia el nombre de usuario
    this.aux = false;
  }

}
