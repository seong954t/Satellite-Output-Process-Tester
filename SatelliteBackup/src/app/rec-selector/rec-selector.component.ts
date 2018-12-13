import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rec-selector',
  templateUrl: './rec-selector.component.html',
  styleUrls: ['./rec-selector.component.css'],
  providers: [DataService]
})
export class RecSelectorComponent implements OnInit {
  @Input() recInfo;

  objectKeys = Object.keys;
  serverUrl: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  updateServerUrl() {
    this.dataService.setServerUrl(this.serverUrl);
  }

  clickRecMode(mode) {
    if (this.recInfo[mode].running === true) {
      this.modeTurnOff(mode);
    } else {
      this.modeTurnOn(mode);
    }
  }

  modeTurnOn(mode) {
    this.dataService.getStart(mode, this.recInfo[mode].interval).subscribe(
      res => {
        console.log('res');
        console.log(res);
      },
      err => {
        console.log('err');
        console.log(err);
      });
  }

  modeTurnOff(mode) {
    this.dataService.getStop(mode).subscribe(
      res => {
        console.log('res');
        console.log(res);
      },
      err => {
        console.log('err');
        console.log(err);
      }
    );
  }
}
