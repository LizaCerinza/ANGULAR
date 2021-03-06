import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any) {
    let artistaid;
    if (item.type === 'artist' ) {
       artistaid = item.id;
     } else {
       artistaid = item.artists[0].id;
      }
    this.router.navigate(['/artista', artistaid]);

  }

}
