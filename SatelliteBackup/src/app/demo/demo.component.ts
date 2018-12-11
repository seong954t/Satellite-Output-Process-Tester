import { SatelliteBackupComponent } from './../satellite-backup/satellite-backup.component';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  clusterRef: any;
  statusRef: any;
  clusterInfo: any;
  statusInfo: any;

  constructor(db: AngularFireDatabase) {
    this.clusterRef = db.object('cluster');
    this.statusRef = db.object('status');

    this.clusterRef.snapshotChanges().subscribe(action => {
      this.clusterInfo = action.payload.val();
      console.log(this.clusterInfo);
    });

    this.statusRef.snapshotChanges().subscribe(action => {
      this.statusInfo = action.payload.val();
      console.log(this.statusInfo);
    });
  }

  ngOnInit() {
  }

  makeKafkaBreak() {
    const temp = this.clusterInfo;
    temp.Kafka3.connected = false;
    this.clusterInfo = temp;

    console.log(this.clusterInfo);
  }

}
