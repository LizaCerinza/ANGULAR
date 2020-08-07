import {Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeachComponent } from './components/seach/seach.component';
import { ArtistaComponent } from './components/artista/artista.component';


export const ROUT: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SeachComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: ' home'}
];
