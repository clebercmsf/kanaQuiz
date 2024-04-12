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
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then( m => m.LearningPageModule)
  },
  {
    path: 'combination',
    loadChildren: () => import('./combination/combination.module').then( m => m.CombinationPageModule)
  },
  {
    path: 'dakuten',
    loadChildren: () => import('./dakuten/dakuten.module').then( m => m.DakutenPageModule)
  },  {
    path: 'praticle',
    loadChildren: () => import('./praticle/praticle.module').then( m => m.PraticlePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
