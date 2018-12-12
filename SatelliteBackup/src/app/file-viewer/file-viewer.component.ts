import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
  satelliteDir: any;
  storeDir: any;
  satelliteRef: any;
  storeRef: AngularFireObject<{}>;
  satellitedata: any;
  storedata: any;

  hasChildren = (item: any) => item.items && item.items.length > 0;
  children = (item: any) => of(item.items);

  constructor(private db: AngularFireDatabase) {
    // satellite
    this.satelliteRef = this.db.object('satellite_dir');
    this.satelliteRef.snapshotChanges().subscribe(action => {
      this.satelliteDir = action.payload.val();
      this.satellitedata = this.getTreeViewDataStructure(this.satelliteDir);
    });

    // store
    this.storeRef = this.db.object('saved_dir');
    this.storeRef.snapshotChanges().subscribe(action => {
      this.storeDir = action.payload.val();
      this.storedata = this.getTreeViewDataStructure(this.storeDir);
    });
  }

  getTreeViewDataStructure(dir: object) {
    const tree_view_data = [];
    // tslint:disable-next-line:forin
    for (const key in dir) {
      let item = {};
      if (typeof (dir[key]) !== 'string') {
        item = {
          'text': key,
          'items': this.getTreeViewDataStructure(dir[key])
        };
      } else {
        item = {
          'text': key + '.' + dir[key]
        };
      }
      tree_view_data.push(item);
    }
    return tree_view_data;
  }

  ngOnInit() {
  }

}
