import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'queueback',
    loadChildren: () => import('./queueback/queueback.module').then( m => m.QueuebackPageModule)
  },
  {
    path: 'queue',
    loadChildren: () => import('./queue/queue.module').then( m => m.QueuePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'menudetail',
    loadChildren: () => import('./menudetail/menudetail.module').then( m => m.MenudetailPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
