import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-satellite-backup',
  templateUrl: './satellite-backup.component.html',
  styleUrls: ['./satellite-backup.component.css'],
  providers: [DataService]
})
export class SatelliteBackupComponent implements OnInit {
  @Input() recInfo;
  @Input() clusterInfo;

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
