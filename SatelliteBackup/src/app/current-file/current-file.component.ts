import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-current-file',
  templateUrl: './current-file.component.html',
  styleUrls: ['./current-file.component.css']
})
export class CurrentFileComponent implements OnInit {
  @Input() recInfo;

  objectKeys = Object.keys;
  modeList = {};

 constructor(private db: AngularFireDatabase) { }

 ngOnInit() {
   this.initFirebase();
 }

 initFirebase() {
   this.db.list('status').query.once('value').then(action => {
     for (const key of Object.keys(action.val())) {
       this.modeList[key] = {
         satellite_file: false,
         saved_file: false
       };
     }
     for (const [key, value] of Object.entries(this.modeList)) {
       this.db.object(`status/${key}/satellite_file`).valueChanges().subscribe(val => {
         console.log(key, value['satellite_file']);
       });
       this.db.object(`status/${key}/saved_file`).valueChanges().subscribe(val => {
         console.log(key, value['saved_file']);
       });
     }
   });
 }


}
