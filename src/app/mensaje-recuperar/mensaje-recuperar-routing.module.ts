import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeRecuperarPage } from './mensaje-recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeRecuperarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeRecuperarPageRoutingModule {}
