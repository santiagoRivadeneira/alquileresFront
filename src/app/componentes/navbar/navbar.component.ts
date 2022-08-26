import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public aux:boolean = true;
  constructor(public srv: AutenticacionService, public srvLogin: LoginService, private router: Router) { }

  cerrarSesion(){
    this.srvLogin.email = "";
    var y = document.getElementsByClassName('container')[0];
    y.setAttribute("style", "overflow:auto"); 

    this.router.navigate(["/home"]);
  }
 
  ngOnInit(): void {
    this.srv.modal = true;
  }

}
