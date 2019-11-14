import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelayedPreloading, NoPreloading, PreloadAllModules, SelectivePreloading, NetworkAwarePreloading } from './app-routing.strategies';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  imports: [
    CommonModule,
    QuicklinkModule
  ],
  providers: [
    PreloadAllModules,
    NoPreloading,
    DelayedPreloading,
    SelectivePreloading,
    NetworkAwarePreloading
  ],
  exports: [
    QuicklinkModule
  ]
})
export class SharedModule { }
