import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styles: []
})
export class SeachComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private sporify: SpotifyService) { }

 buscar( termino: string ) {
   console.log(termino);
   this.loading = true;
   this.sporify.getArtista(termino)
   .then(res => {
    res.subscribe((data: any ) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
   });
    });
 }

}
