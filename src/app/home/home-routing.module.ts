import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'cartao',
        loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)
      },
      {
        path: 'cambio',
        loadChildren: () => import('./cambio/cambio.module').then( m => m.CambioPageModule)
      },
      {
        path: 'simulacao',
        loadChildren: () => import('./simulacao/simulacao.module').then( m => m.SimulacaoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
