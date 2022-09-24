import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public aux:boolean = true;
  constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router, public authService: AuthService) { }

  cerrarSesion(){
    this.srvLogin.email = "";
    var y = document.getElementsByClassName('container')[0];
    y.setAttribute("style", "overflow:auto"); 

    this.router.navigate(["/home"]);
  }

  volver(){
    // document.getElementById("").set 
    //cerrar form
  }
 
  ngOnInit(): void {
    this.srv.modal = true;
  }

}
