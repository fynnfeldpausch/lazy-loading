import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: OneComponent
    }])
  ]
})
export class OneModule { }
