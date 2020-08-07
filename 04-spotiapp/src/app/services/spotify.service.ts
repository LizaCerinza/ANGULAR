import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: any;
  cid = '11d1a98e4f8c477b8f98fb868851f4c8';
  cids = '2f93c4daef0140a18830e317ff1681c0';

  constructor( private htpp: HttpClient) {
    console.log('servicio funcionando');
   }

  // async getQueryv(query: string) {

  //   const token = await this.getoken(this.cid, this.cids);
  //   const url = `https://api.spotify.com/v1/${query}`;
  //   const headers = new HttpHeaders({
  //       Authorization: `${token} `
  //     });
  //   return this.htpp.get(url, {headers});
  //  }

async  getQuery(query: string)   {
    console.log('voy al get queriy');
    const token = await this.getoken(this.cid, this.cids);
    console.log(this.token);
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: `${this.token}`
    });
    return this.htpp.get(url, { headers });
}
// para buscar los ultimos lanzamiantos

async getNewReleases() {
  const obs = await this.getQuery('browse/new-releases?limit=20');
  return obs.pipe(map((data: any) => {
    return data.albums.items;
  }));
     }

// async getNewReleases() {
//   const obs = await this.getQuery('browse/new-releases');
//   return obs.pipe(map((data: any) => {
//    console.log(data);
//    return data.albums.items;
//   }));
// }
// para buscar artistas
async getArtista(termino: string) {
  const obs = await this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=0`)
  return  obs.pipe(map(data => {
       return data[`artists`].items;
     }));
   }

// GET https://api.spotify.com/v1/artists/{id}
async getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    }

// GET https://api.spotify.com/v1/artists/{id}/top-tracks
async   getArtistTop(id: string) {
  const obs = await this.getQuery(`artists/${id}/top-tracks?country=CO`)
  return   obs.pipe(map(data => {
        return data[`tracks`];
      }));
      }


async getoken(clientid: string, clientsec: string) {
      return this.htpp.get(`https://spotifyapp-1.herokuapp.com/spotify/${clientid}/${clientsec}`)
      .toPromise().then( (token: any) => {
        this.token = `Bearer ${token[`access_token`]}`;
      }, (err: any) => {
        console.log(err);
      });
    }

}
