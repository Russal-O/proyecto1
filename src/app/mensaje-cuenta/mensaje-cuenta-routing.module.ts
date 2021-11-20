import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeCuentaPage } from './mensaje-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeCuentaPageRoutingModule {}
