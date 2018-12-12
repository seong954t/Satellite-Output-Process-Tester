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
    /*
    rest api에게 mode 상태 true로 만들도록 요청 (mode, interval)
    if(ack === true){
      changeModeColor(mode, true)
      changeModeBlock(mode, true)
    }else{
      예외처리
    }
    */
    // this.recInfo[mode].running = true;
    this.dataService.getStart(mode, this.recInfo[mode].interval).subscribe(x => {

    });
  }

  modeTurnOff(mode) {
    /*
   rest api에게 mode 상태 false로 만들도록 요청 (mode)
   if(ack === true){
     changeModeColor(mode, false)
     changeModeBlock(mode, false)
   }else{
     예외처리
   }
   */
    // this.recInfo[mode].running = false;
    this.dataService.getStop(mode).subscribe(x => {

    });
  }

  getLatestFile(mode, type) {
    if (this.recInfo[mode].running) {
      if (type === 'satellite') {
        return this.recInfo[mode].satellite_file;
      } else {
        return this.recInfo[mode].saved_file;
      }
    }
    return '';
  }

  showData() {
    console.log(this.clusterInfo, this.recInfo);
  }
}
