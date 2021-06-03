import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalles',
  template: `
    <p>
      usuario-detalles works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetallesComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    let parametro;
    this.router.parent.params.subscribe(parametros => {
      parametro = parametros;
      console.log("Hijo");
      console.log(parametros)
    });
  }

  ngOnInit(): void {
  }

}
