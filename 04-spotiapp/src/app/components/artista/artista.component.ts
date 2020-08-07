import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  top: any[] = [];


  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spoty: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params[`id`]);
      this.getTop(params[`id`]);
    });
   }


getArtista(id: string) {
  this.loading = true;
  this.spoty.getArtist(id)
  .then(res => {
    res.subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    });
  });
}

getTop(id: string) {
 this.spoty.getArtistTop(id)
   .then(res => {
    res.subscribe(topt => {
      this.top = topt;
      console.log(this.top);
     });
   });
}

}
