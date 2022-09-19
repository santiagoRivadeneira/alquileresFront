import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


import {AuthService }  from "../app/servicios/auth.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }


  canActivate(): boolean{
    if(this.authService.CerrarSesion()){
      return true
    }

    this.router.navigate(["/login"])
    return false;
  }
  
}
