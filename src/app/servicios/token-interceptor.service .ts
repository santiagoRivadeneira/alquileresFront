import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {



  constructor(private authService: AuthService) { }

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.ObtenerToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

  

}
