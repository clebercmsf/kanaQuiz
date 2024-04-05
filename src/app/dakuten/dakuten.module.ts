import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DakutenPageRoutingModule } from './dakuten-routing.module';

import { DakutenPage } from './dakuten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DakutenPageRoutingModule
  ],
  declarations: [DakutenPage]
})
export class DakutenPageModule {}
