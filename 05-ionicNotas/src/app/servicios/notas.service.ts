import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ListaItem } from '../models/lista-item.model';


@Injectable({
  providedIn: 'root'
})
export class NotasService {

  public listas: Lista[] = [];
  public lista: Lista;


  constructor(  ) {
    this.cargarStorage();
  //  const lista1 = new Lista ('lista 1');
  //  const lista2 = new Lista ('lista 2');

  //  this.listas.push(lista1, lista2);
  //  console.log(this.listas);
  }
crearLista(titulo: string){
  const nuevaLista = new Lista (titulo);
  this.listas.push(nuevaLista);
  this.guardarStorage();
  return nuevaLista.id;
}

obtenerLista(id: string | number): Lista {
  id = Number(id);
  return  this.listas.find(data => {
    return data.id === id; });
}

guardarStorage(){
  localStorage.setItem('data', JSON.stringify(this.listas));
}


cargarStorage(){
  if (localStorage.getItem('data')) {
  this.listas = JSON.parse(localStorage.getItem('data')); }
  else{
    this.listas = [];
  }

}

borrarLista(lista: Lista){
  this.listas = this.listas.filter(data => {
    return data.id !== lista.id;
  });
  this.guardarStorage();
}




editarItem(item: ListaItem){

}




}
