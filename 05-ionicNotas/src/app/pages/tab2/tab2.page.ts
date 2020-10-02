import { Component } from '@angular/core';
import { NotasService } from '../../servicios/notas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public notas: NotasService) {
  }

}
