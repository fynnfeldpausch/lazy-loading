import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { DelayedPreloading, NetworkAwarePreloading, SelectivePreloading } from './shared/app-routing.strategies';

const routes: Routes = [{
  path: 'one',
  loadChildren: () => import('./one/one.module').then(m => m.OneModule),
}, {
  path: 'two',
  loadChildren: () => import('./two/two.module').then(m => m.TwoModule)
}, {
  path: 'three',
  loadChildren: () => import('./three/three.module').then(m => m.ThreeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
    // preloadingStrategy: PreloadAllModules
    // preloadingStrategy: DelayedPreloading
    // preloadingStrategy: SelectivePreloading
    // preloadingStrategy: NetworkAwarePreloading
    // preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
