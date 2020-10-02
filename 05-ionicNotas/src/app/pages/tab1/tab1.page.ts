import { Component } from '@angular/core';
import { NotasService } from '../../servicios/notas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public notas: NotasService,
              private router: Router,
              private alertcon: AlertController) {
  }

 async agregarLista() {
    const alert = await this.alertcon.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0){
              return;
            }
            else{
             const listaid = this.notas.crearLista(data.titulo);
             this.router.navigateByUrl( `/tabs/tab1/agregar/${listaid}`);
            }

          }
        }

      ]
    });
    alert.present();

  }
}
