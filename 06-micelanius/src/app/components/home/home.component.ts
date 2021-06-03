import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   
   
  <app-ng-style></app-ng-style>
<hr>
  <app-css></app-css>
<hr>
  <p>Hola app componenet</p>

 <app-clases></app-clases>
 <hr>
 <p [appResaltado]="'#B0E0E6'">
   Hola mundo
 </p>


 <div>
   <app-ng-switch></app-ng-switch>
 </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
