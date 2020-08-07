
import {Component} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';


@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
 })
export class BodyComponent{
    mostrar=true;    // Variable del Boton

    frase: any = {
        mensaje:'"Todo el mundo debería aprender a programar, porque te enseña a pensar"',
        autor: 'Steve Jobs'
    };

    personajes:string[]=['THOR','IRONMAN','ATMAN'];







}