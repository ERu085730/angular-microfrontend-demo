import { DialogTestModule } from './../../components/dialog-test/dialog-test.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: TestComponent
    }]),
    NzModalModule,
    DialogTestModule
  ]
})
export class TestModule { }
