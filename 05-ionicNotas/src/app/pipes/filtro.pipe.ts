import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(Listas: Lista[], completada: boolean = true): Lista[] {
   return  Listas.filter(data => {
     return data.terminada === completada;
    });
  }
}
