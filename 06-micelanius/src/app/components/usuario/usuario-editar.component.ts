import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

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
