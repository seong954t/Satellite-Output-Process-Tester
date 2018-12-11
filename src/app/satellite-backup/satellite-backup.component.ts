import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-satellite-backup',
  templateUrl: './satellite-backup.component.html',
  styleUrls: ['./satellite-backup.component.css']
})
export class SatelliteBackupComponent implements OnInit {
  @Input() recInfo;
  @Input() clusterInfo;
  serverBoxStyle: Object = {};

  // localhost:8080/status/start/fd/10
  // localhost:8080/status/stop/fd/
  // localhost:8080/config/


  // recInfo = {
  //   FD: {
  //     interval: 5,
  //     state: "stop"
  //   },
  //   LA: {
  //     interval: 10,
  //     state: "stop"
  //   },
  //   ELA: {
  //     interval: 15,
  //     state: "stop"
  //   },
  // }

  // clusterInfo = {
  //   Kafka1: {
  //     ip: "192.168.32.130",
  //     state: "run"
  //   },
  //   Kafka2: {
  //     ip: "192.168.32.130",
  //     state: "break"
  //   },
  //   Kafka3: {
  //     ip: "192.168.32.130",
  //     state: "run"
  //   },
  //   Kafka4: {
  //     ip: "192.168.32.130",
  //     state: "run"
  //   },
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.clusterInfo && !changes.clusterInfo.currentValue) {
      for (var index in this.clusterInfo) {
        if (this.clusterInfo[index].state === "break") {
          this.setKafkaColor(index)
        }
      }
    }
  }

  objectKeys = Object.keys

  constructor() { }

  ngOnInit() {

  }

  clickRecMode(mode) {
    console.log(mode)
    // rest api로 클릭한 모드의 state 변경
  }

  changeInterval() {

  }

  setKafkaColor(key) { // kafka server break 발생시 실행
    //document.getElementsByClassName('serverBox').
  }
}
