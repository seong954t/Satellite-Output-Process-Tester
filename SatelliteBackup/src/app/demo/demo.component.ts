import { SatelliteBackupComponent } from './../satellite-backup/satellite-backup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  clusterInfo = {
    Kafka1: {
      address: "192.168.32.130",
      connected: true
    },
    Kafka2: {
      address: "192.168.32.100",
      connected: false
    },
    Kafka3: {
      address: "192.168.32.210",
      connected: true
    },
    Kafka4: {
      address: "192.168.32.090",
      connected: true
    },
  }

  recInfo = {
    FD: {
      interval: 5,
      running: false
    },
    LA: {
      interval: 10,
      running: true
    },
    ELA: {
      interval: 15,
      running: false
    },
  }

  constructor() { }

  ngOnInit() {
  }

  makeKafkaBreak() {
    const temp = this.clusterInfo
    temp.Kafka3.connected = false
    this.clusterInfo = temp

    console.log(this.clusterInfo)
  }

}
