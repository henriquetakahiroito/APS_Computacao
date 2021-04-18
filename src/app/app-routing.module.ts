import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
