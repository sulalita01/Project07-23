import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueuebackPageRoutingModule } from './queueback-routing.module';

import { QueuebackPage } from './queueback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueuebackPageRoutingModule
  ],
  declarations: [QueuebackPage]
})
export class QueuebackPageModule {}
