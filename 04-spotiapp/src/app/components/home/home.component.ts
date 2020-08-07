// import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Pipe } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  // paises:any[];
  lanzamintos: any[] = [];
  loading: boolean;
  error: boolean;
  errorMensaje: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.errorMensaje = '';

    this.spotify.getNewReleases()
     .then(res => {
       res.subscribe(
         data => {
          this.lanzamintos = data;
          this.loading = false;
         }, (errorService) => {
          this.error = true;
          this.loading = false;
          this.errorMensaje = errorService.error.error.message;
          console.log(errorService);
        }
       );
     });

// this.http.get('https://restcountries.eu/rest/v2/lang/es')
// .subscribe((data:any) =>{
// this.paises=data;
    // console.log(data);
   // })
   }
}
