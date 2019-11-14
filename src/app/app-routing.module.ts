import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [{
  path: 'one',
  loadChildren: () => import('./one/one.module').then(m => m.OneModule),
  // data: { preload: true }
}, {
  path: 'two',
  loadChildren: () => import('./two/two.module').then(m => m.TwoModule)
}, {
  path: 'three',
  loadChildren: () => import('./three/three.module').then(m => m.ThreeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: NoPreloading
    // preloadingStrategy: PreloadAllModules
    // preloadingStrategy: DelayedPreloading
    // preloadingStrategy: SelectivePreloading
    // preloadingStrategy: NetworkAwarePreloading
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
