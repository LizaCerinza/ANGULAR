import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NotasService } from '../../servicios/notas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;
  constructor(public notas: NotasService,
              public route: ActivatedRoute,
              public rout: Router,
              private alertcon: AlertController) { }

  ngOnInit() {}

  listaselec(lista: Lista){
    if (this.terminada){
      this.rout.navigateByUrl( `/tabs/tab2/agregar/${lista.id}`);
    }else{
    this.rout.navigateByUrl( `/tabs/tab1/agregar/${lista.id}`);
  }
  }

  borrar(lista: Lista){
    this.notas.borrarLista(lista);
  }

  async editarTitulo(lista: Lista) {
    const alert = await this.alertcon.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            if (data.titulo.length === 0){
              return;
            }
            else{
             lista.titulo = data.titulo;
             this.notas.guardarStorage();
             this.lista.closeSlidingItems();

            }
          }
        }
      ]
    });
    alert.present();
  }

}
