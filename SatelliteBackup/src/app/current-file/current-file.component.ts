import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-file',
  templateUrl: './current-file.component.html',
  styleUrls: ['./current-file.component.css']
})
export class CurrentFileComponent implements OnInit {
  @Input() recInfo;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
