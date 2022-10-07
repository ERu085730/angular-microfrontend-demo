import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit {

  constructor(private modalRef: NzModalRef) { }

  ngOnInit(): void {
    console.log(this.modalRef);

  }

}
