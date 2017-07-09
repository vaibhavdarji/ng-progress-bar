import { Component, OnInit } from '@angular/core';
import { BarsService } from './service/bars.service';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from './service/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Progress Bars';
  bars: any[] = new Array();
  buttons: any[] = new Array();
  selectedBar: string = "-1";
  error: string;
  maxLimit: number;
  constructor (private _http: BarsService, private commonService: CommonService) {

  }

  async renderBar(bars) {
      let index = 0;
      for (let bar of bars) {
          await this.bars.push({
              index: index,
              percentage: bar,
              id: `progress-bar-${index}`
          });
          index++;
      }
  }

  async renderButtons (buttons) {
      for (let btn of buttons) {
        await this.buttons.push({
            text: btn
        });
      }
  }

  async render (data) {
      await this.renderBar(data.bars);
      await this.renderButtons(data.buttons);
      this.maxLimit = data.limit;
  }

  ngOnInit () {
      return this._http.getData().subscribe(data => this.render(data))
  }

  onChangeDropdown (event) {
  }

  onBtnClick (progress) {
      if (!this.selectedBar || this.selectedBar === '-1') {
          this.error = 'Please select progress bar option in dropdown';
      } else {
          let index = parseInt(this.selectedBar);
          this.commonService.notifyOther({option: 'update_progress', value: progress, index: index, maxLimit: this.maxLimit});
      }
  }

}
