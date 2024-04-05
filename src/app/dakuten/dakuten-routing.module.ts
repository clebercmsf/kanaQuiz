import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DakutenPage } from './dakuten.page';

const routes: Routes = [
  {
    path: '',
    component: DakutenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DakutenPageRoutingModule {}
