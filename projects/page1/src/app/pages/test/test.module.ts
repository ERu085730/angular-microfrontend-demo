import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: TestComponent
    }])
  ]
})
export class TestModule { }
