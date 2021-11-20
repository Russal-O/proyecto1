import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeRecuperarPageRoutingModule } from './mensaje-recuperar-routing.module';

import { MensajeRecuperarPage } from './mensaje-recuperar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeRecuperarPageRoutingModule
  ],
  declarations: [MensajeRecuperarPage]
})
export class MensajeRecuperarPageModule {}
