import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.sevice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]
  constructor(private _heroesService: HeroesService,
              private _Router:Router                ) {
   }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }
  verHeroe(index: number){
    this._Router.navigate(['/heroe',index])
  }

}
