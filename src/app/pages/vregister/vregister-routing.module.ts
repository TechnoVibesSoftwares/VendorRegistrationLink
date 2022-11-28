import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VregisterPage } from './vregister.page';

const routes: Routes = [
  {
    path: '',
    component: VregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VregisterPageRoutingModule {}
