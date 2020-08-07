import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): string {

    let salida:string;



    if(activar){
      salida = '*'.repeat(value.length);
    }
  else{salida=value;}

    return salida;
  }

}
