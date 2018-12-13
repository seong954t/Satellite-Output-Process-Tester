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
  spinners = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    for (const key of Object.keys(this.recInfo)){
      this.spinners[key] = false;
    }
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
    this.spinners[mode] = true;
    this.dataService.getStart(mode, this.recInfo[mode].interval).subscribe(
      res => {
        console.log('res');
        console.log(res);
        this.spinners[mode] = false;
      },
      err => {
        console.log('err');
        console.log(err);
        this.spinners[mode] = false;
      });
  }

  modeTurnOff(mode) {
    this.spinners[mode] = true;
    this.dataService.getStop(mode).subscribe(
      res => {
        console.log('res');
        console.log(res);
        this.spinners[mode] = false;
      },
      err => {
        console.log('err');
        console.log(err);
        this.spinners[mode] = false;
      }
    );
  }
}
