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
  }

}
