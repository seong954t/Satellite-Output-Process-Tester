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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  clickRecMode(mode) {
    if (this.recInfo[mode].running === true) {
      this.modeTurnOff(mode);
    } else {
      this.modeTurnOn(mode);
    }
  }

  modeTurnOn(mode) {
    this.dataService.getStart(mode, this.recInfo[mode].interval).subscribe(x => {

    });
  }

  modeTurnOff(mode) {
    this.dataService.getStop(mode).subscribe(x => {

    });
  }
}
