import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarimagenesService {

  urls: any = [];
  aux: boolean = false;

  constructor() { }

  selecImg(event: any){
    if (event.target.files) {
      for(var i=0; i< File.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }
  
}
