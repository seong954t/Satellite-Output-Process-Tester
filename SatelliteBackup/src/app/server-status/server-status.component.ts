import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  @Input() clusterInfo;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
