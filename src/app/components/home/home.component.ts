import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  timer;
  interval;
  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.getTimer();
  }

  private getTimer() {
    this.interval = setInterval( () => {
      this.timer = moment().format('LTS');
      const second = new Date().getSeconds();
      this.homeService.second.next(second);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.interval.clearInterval();
  }

}
