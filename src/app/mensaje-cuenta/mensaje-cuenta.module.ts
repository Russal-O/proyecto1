import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeCuentaPageRoutingModule } from './mensaje-cuenta-routing.module';

import { MensajeCuentaPage } from './mensaje-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeCuentaPageRoutingModule
  ],
  declarations: [MensajeCuentaPage]
})
export class MensajeCuentaPageModule {}
