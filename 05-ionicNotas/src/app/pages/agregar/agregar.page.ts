import { Component, OnInit, ViewChild } from '@angular/core';
import { NotasService } from '../../servicios/notas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from '../../models/lista-item.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  @ViewChild ('bott') lista1: IonList;

  lista: Lista;
  nombreItem: '';

  constructor( private notas: NotasService,
               private route: ActivatedRoute,
               private alertcon: AlertController) {
  const listaid = this.route.snapshot.paramMap.get('listaid');

  this.lista = this.notas.obtenerLista(listaid);

  }

  ngOnInit() {
  }

  agregarItem(){
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.notas.guardarStorage();
  }

  cambioCheck(item: ListaItem){
    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    if ( pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.notas.guardarStorage();
  }

  borrar(index: number){
    this.lista.items.splice(index, 1);
    this.notas.guardarStorage();
  }

  async editarItem(item: ListaItem) {
    const alert = await this.alertcon.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'des',
          type: 'text',
          value: item.desc,
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista1.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            if (data.des.length === 0){
              return;
            }
            else{
             item.desc = data.des;
             this.notas.guardarStorage();
             this.lista1.closeSlidingItems();

            }
          }
        }
      ]
    });
    alert.present();
  }
}
