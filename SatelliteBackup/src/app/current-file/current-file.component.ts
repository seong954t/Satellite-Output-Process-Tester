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
  SATELLITE_FILE = 0;
  SAVED_FILE = 1;

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
         this.modeList['satellite_file'] = true;
         this.alertEndLatestFile(key, this.SATELLITE_FILE);
       });
       this.db.object(`status/${key}/saved_file`).valueChanges().subscribe(val => {
         console.log(key, value['saved_file']);
         this.modeList['saved_file'] = true;
         this.alertEndLatestFile(key, this.SAVED_FILE);
       });
     }
   });
 }

 alertEndLatestFile(mode: string, kind_of_file: number){
   setTimeout(() => {
     if(kind_of_file == this.SATELLITE_FILE){
       this.modeList[mode]['satellite_file'] = false;
     }else{
       this.modeList[mode]['saved_file'] = false;
     }
   }, 1000);

 }

}
