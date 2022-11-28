import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VregisterPageRoutingModule } from './vregister-routing.module';

import { VregisterPage } from './vregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VregisterPageRoutingModule
  ],
  declarations: [VregisterPage]
})
export class VregisterPageModule {}
