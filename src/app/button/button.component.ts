import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input('text') text: string;
    @Output() onBtnClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  onBtnClick() {
      this.onBtnClicked.emit(this.text);
  }

}
