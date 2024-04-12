import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticlePageRoutingModule } from './praticle-routing.module';

import { PraticlePage } from './praticle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticlePageRoutingModule
  ],
  declarations: [PraticlePage]
})
export class PraticlePageModule {}
