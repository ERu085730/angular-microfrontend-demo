import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DialogTestComponent } from './../../components/dialog-test/dialog-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private modal: NzModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: DialogTestComponent,
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }

}
