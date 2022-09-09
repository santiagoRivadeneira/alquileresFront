import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generarpublicacion',
  templateUrl: './generarpublicacion.component.html',
  styleUrls: ['./generarpublicacion.component.css']
})
export class GenerarpublicacionComponent implements OnInit {

  contactForm = new FormGroup({
    direccion: new FormControl('', [Validators.required]),
    ambientes: new FormControl('', [Validators.required]),
    localidad: new FormControl ('', [Validators.required])
  })
  
  constructor(private router: Router) { }

  onResetForm(){
    this.contactForm.reset();
   }

   publicar(){
    
    this.router.navigate[("/home")];
    console.log("enviado");
    // this.onResetForm();
   }
   
   get direccion() { return this.contactForm.get('direccion'); }
   get ambientes() { return this.contactForm.get('ambientes'); }
   get localidad() { return this.contactForm.get('localidad'); }

  ngOnInit(): void {
  }

}
