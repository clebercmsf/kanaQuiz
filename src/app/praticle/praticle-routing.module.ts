import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraticlePage } from './praticle.page';

const routes: Routes = [
  {
    path: '',
    component: PraticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticlePageRoutingModule {}
