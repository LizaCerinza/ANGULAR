
import { Routes} from '@angular/router'

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetallesComponent } from './usuario-detalles.component';
import { UsuarioEditarComponent } from './usuario-editar.component';



 export const USUARIO_ROUTES: Routes =[
    { path: 'editar', component: UsuarioEditarComponent},
        { path: 'nuevo', component: UsuarioNuevoComponent},
        { path: 'detalles', component: UsuarioDetallesComponent},
        {path: '**', pathMatch:'full', redirectTo:'nuevo'} 
];

