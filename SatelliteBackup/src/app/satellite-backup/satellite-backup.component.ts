import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-satellite-backup',
  templateUrl: './satellite-backup.component.html',
  styleUrls: ['./satellite-backup.component.css']
})
export class SatelliteBackupComponent implements OnInit {
  @Input() recInfo;
  @Input() clusterInfo;

  objectKeys = Object.keys

  constructor() { }

  ngOnInit() {

  }

  clickRecMode(mode) {
    if (this.recInfo[mode].running === true) {
      this.modeTurnOff(mode)
    } else {
      this.modeTurnOn(mode)
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
    this.recInfo[mode].running = true
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
    this.recInfo[mode].running = false
  }

  showData() {
    console.log(this.clusterInfo, this.recInfo)
  }
}
