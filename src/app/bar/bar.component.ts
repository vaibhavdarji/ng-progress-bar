import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../service/common.service'


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
    @Input('index') index: string;
    @Input('id') id: string;
    @Input('percentage') percentage: string;
    @Output() onBarUpdate: EventEmitter<any> = new EventEmitter();
    $elem: HTMLElement;
    private subscription: Subscription;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {

            if (res.hasOwnProperty('option') && res.option === 'update_progress' && this.index === res.index) {

                let percentage = parseInt(this.percentage) + parseInt(res.value);

                if (percentage > res.maxLimit) {
                    percentage = res.maxLimit;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                this.percentage = percentage.toString();
                this.updateProgress(percentage);
                // perform your other action from here
            }
        });
    }

    updateProgress (percentage) {
        this.$elem.querySelector('.positive').setAttribute('style', `width: ${percentage}%`);
        this.$elem.querySelector('.negative').setAttribute('style', `width: ${100 - percentage}%`);
        if (percentage > 100) {
            this.$elem.querySelector('.positive').classList.add('overloaded');
        } else {
            this.$elem.querySelector('.positive').classList.remove('overloaded');
        }
    }

    ngAfterViewInit () {
        this.$elem = <HTMLElement>document.querySelector(`#${this.id}`);
        this.updateProgress(this.percentage);
    }



}
