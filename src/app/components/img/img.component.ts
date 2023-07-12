import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  //decorador @input que nos sirve para obtener  valores del componente padre al hijo
  // es decir que el valor que tomara la variable img esta declarada en en la etiqueta <app-img></app-img>
  //en forma de propiedad de esta forma: <app-img img="este valor viene desde el padre"></app-img>
  @Input() img:string='';

  //El decorador @Output nos sirve para enviar información del componente hijo al padre
  // la informacion se envia a traves de eventos declarando primeramente
  //el @Output como un  new EventEmitter<string>(); especificando el tipo de dato a enviar
  // esto genera entonces en la etiqueta del componente un evento personalizado

  @Output() loaded = new EventEmitter<string>();

  imageDefault = "../../../assets/default.jpg"

  imgError(){
    this.img= this.imageDefault;
  }

  imgLoaded(){
    console.log('loaded hijo');

  //En la siguiente linea se emite el evento declarado por el output
    this.loaded.emit(this.img);
  }
}
