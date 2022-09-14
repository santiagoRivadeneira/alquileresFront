import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';
import axios from "axios";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // contactForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
  //   name: new FormControl ('', [Validators.required, Validators.minLength(5)])
  // })

  correo: string = "";
  contrasena: string = "";
  usuarios= [];

  constructor(public userService: UserService) {}

  //  onResetForm(){
  //   this.contactForm.reset();
  //  }

  //  onSaveForm(){
  //   //registro de mail
  //   console.log("email enviado")
  //   this.onResetForm();
  //  }
   
  //  get name() { return this.contactForm.get('name'); }
  //  get email() { return this.contactForm.get('email'); }

   onSubmit = async() => {
    this.userService.CreateUser(this.correo, this.contrasena)
  }


//obtener usuarios

  getUsers = async() => {


    await axios.get('http://localhost:8080/api/usuarios/obtener')

    .then((response) => {

      console.log(response.data);

      this.usuarios.push(response.data)

    }, (error) => {

      console.log(error);

    });

  }

  ngOnInit(): void {}

}
