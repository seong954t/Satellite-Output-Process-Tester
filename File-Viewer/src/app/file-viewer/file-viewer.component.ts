import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
  satellitePath = '/';
  storePath = '/';
  satelliteFileList: Array<String>;
  storeFileList: Array<String>;
  satelliteDir: any;
  storeDir: any;
  satelliteRef: any;
  storeRef: any;
  satelliteFirst = true;
  storeFirst = true;

  backDirectory(target: string) {

  }

  changeDirectory(target: string, file: string) {
    let currentPath = this.satellitePath;
    let currentDir = this.satelliteDir;
    if (target === 'store') {
      currentPath = this.storePath;
      currentDir = this.storeDir;
    }
    const currentDirList = currentPath.trim().split('/');
    currentDirList.push(file);
    console.log(currentDirList);
    for (const dir of currentDirList) {
      if (dir !== '') {
        if (target === 'store') {
          this.storeFileList = this.setPostfix(currentDir[dir]);
        } else {
          this.satelliteFileList = this.setPostfix(currentDir[dir]);
        }
        currentDir = currentDir[dir];
      }
    }
    if (file !== '') {
      if (target === 'store') {
        this.storePath = currentPath + file + '/';
      } else {
        this.satellitePath = currentPath + file + '/';
      }
    }

  }

  setPostfix(currentDir): Array<String> {
    console.log(currentDir);
    const currentList = Object.keys(currentDir);
    for (let i = 0; i < currentList.length; i++) {
      const key = currentList[i];
      if (typeof (currentDir[key]) === 'string') {
        currentList[i] = key + '.' + currentDir[key];
      } else {
        break;
      }
    }
    return currentList;
  }

  constructor(db: AngularFireDatabase) {
    // satellite
    this.satelliteRef = db.object('satellite_dir');
    this.satelliteRef.snapshotChanges().subscribe(action => {
      this.satelliteDir = action.payload.val();
      if (this.satelliteFirst) {
        this.satelliteFileList = Object.keys(this.satelliteDir);
        this.satelliteFirst = false;
      } else {
        this.changeDirectory('satellite', '');
      }
    });

    // store
    this.storeRef = db.object('test_dic');
    this.storeRef.snapshotChanges().subscribe(action => {
      this.storeDir = action.payload.val();
      console.log(this.storeDir);
      if (this.storeFirst) {
        this.storeFileList = Object.keys(this.storeDir);
        this.storeFirst = false;
      } else {
        this.changeDirectory('store', '');
      }
    });
  }

  ngOnInit() {
  }

}
