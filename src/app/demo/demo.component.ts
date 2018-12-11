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
      ip: "192.168.32.130",
      state: "run"
    },
    Kafka2: {
      ip: "192.168.32.100",
      state: "break"
    },
    Kafka3: {
      ip: "192.168.32.210",
      state: "run"
    },
    Kafka4: {
      ip: "192.168.32.090",
      state: "run"
    },
  }

  recInfo = {
    FD: {
      interval: 5,
      state: "stop"
    },
    LA: {
      interval: 10,
      state: "stop"
    },
    ELA: {
      interval: 15,
      state: "stop"
    },
  }

  constructor() { }

  ngOnInit() {
  }

}
