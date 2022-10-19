import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  constructor(public userSrv: UserService) { }

  public email = ""

  ngOnInit(): void {
 



      const userId = localStorage.getItem("id")

       axios.get(`http://localhost:8080/api/usuarios/obtener/${userId}`, {

      })
      .then((response) => {
        console.log(response.data)

        this.email = response.data.email

      }, (error) => {
        console.log(error);
      });
    
  }

}
