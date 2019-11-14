import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ThreeComponent } from './three/three.component';

@NgModule({
  declarations: [ThreeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ThreeComponent
    }])
  ]
})
export class ThreeModule { }
