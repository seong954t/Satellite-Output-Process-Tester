import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [DataService]
})
export class DemoComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  startFD() {
    this.dataService.getStartFd().subscribe(x => {

    });
  }

  stopFD() {
    this.dataService.getStopFd().subscribe(x => {

    });
  }


}
