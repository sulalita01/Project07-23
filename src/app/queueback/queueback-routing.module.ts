import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueuebackPage } from './queueback.page';

const routes: Routes = [
  {
    path: '',
    component: QueuebackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueuebackPageRoutingModule {}
