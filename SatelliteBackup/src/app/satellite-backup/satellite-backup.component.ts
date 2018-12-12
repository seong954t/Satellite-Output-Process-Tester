import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-satellite-backup',
  templateUrl: './satellite-backup.component.html',
  styleUrls: ['./satellite-backup.component.css']
})
export class SatelliteBackupComponent implements OnInit {
  @Input() recInfo;
  @Input() clusterInfo;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
    this.initFirebase();
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

  initFirebase() {
    this.db.list('status').query.once('value').then(action => {
      for (const key of Object.keys(action.val())) {
        this.modeList[key] = false;
      }
      for (const [key, value] of Object.entries(this.modeList)) {
        this.db.object(`status/${key}/satellite_file`).valueChanges().subscribe(val => {
          console.log(val);
        });
      }
    });
  }

}
