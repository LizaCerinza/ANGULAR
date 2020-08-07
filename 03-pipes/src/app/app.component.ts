import { Component } from '@angular/core';
import {NgModule} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nombre     : string    ='Capitán América';
nombre2    : string    ='LiZa cerINza';
arreglo    : number [] = [1,2,3,4,5,6,7,8,9,10] ;
PI         : number    = Math.PI;
porcentaje : number    = 0.234;
salario    : number    = 1234.5;
fecha      : Date      = new Date();
idioma     : string    = 'es';
videoURL   : string    = "https://www.youtube.com/embed/p1JmzB6E-C8";
activar    : boolean   = true;






valorPromesa = new Promise <string> ((resolve)=>{

  setTimeout(() => {
    resolve('Llego la data');
    
  }, 4500);
});


heroe = {
  nombre: 'Logan',
  clave : 'Wolverine',
  edad  : 500,
  dirección: {
    calle: 'Primera',
    casa: 20
  }
}


}
