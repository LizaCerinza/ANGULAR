import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {



  constructor(private router: ActivatedRoute) {
    let parametro;
    this.router.params.subscribe(parametros => {
      parametro = parametros;
      console.log("Padre");
      console.log(parametro)
    });
  }

  ngOnInit(): void {
  }

}
