import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TwoComponent
    }])
  ]
})
export class TwoModule { }
