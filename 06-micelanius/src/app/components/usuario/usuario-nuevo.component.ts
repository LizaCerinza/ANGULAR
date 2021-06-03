import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    let parametro;
    this.router.parent.params.subscribe(parametros => {
      parametro = parametros;
      console.log("Hijo");
      console.log(parametro)
    });
  }

  ngOnInit(): void {
  }

}
