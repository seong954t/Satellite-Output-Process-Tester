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
}
