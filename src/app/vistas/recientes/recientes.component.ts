import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';
import { UserService } from 'src/app/servicios/user.service';
import axios from "axios";

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css']
})
export class RecientesComponent implements OnInit {

  public publicaciones  = [];
  correo: string = "";
  contrasena: string = "";

  constructor() {}

  ngOnInit(): void {

    
  }





   
 
}
