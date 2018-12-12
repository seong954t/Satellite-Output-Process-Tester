import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { of } from 'rxjs/observable/of';

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
  storeRef: AngularFireObject<{}>;
  satelliteFirst = true;
  storeFirst = true;
  satellitedata: any;

  hasChildren = (item: any) => item.items && item.items.length > 0;
  children = (item: any) => of(item.items);

  backDirectory(target: string) {
    let currentPath = this.satellitePath;
    let currentDir = this.satelliteDir;
    if (target === 'store') {
      currentPath = this.storePath;
      currentDir = this.storeDir;
    }
    if (currentPath === '/') {
      return;
    }
    let currentDirList = currentPath.slice(1, -1).split('/');
    currentDirList = currentDirList.slice(0, -1);

    if (currentDirList.length === 0) {
      if (target === 'store') {
        this.storePath = '/';
        this.storeFileList = Object.keys(this.storeDir);
      } else {
        this.satellitePath = '/';
        this.satelliteFileList = Object.keys(this.satelliteDir);
      }
      return;
    }

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

    if (target === 'store') {
      this.storePath = '/' + currentDirList.join('/') + '/';
    } else {
      this.satellitePath = '/' + currentDirList.join('/') + '/';
    }
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

    for (const dir of currentDirList) {
      if (dir !== '') {
        if (currentDir[dir] === undefined) {
          return;
        }
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

  constructor(private db: AngularFireDatabase) {
    // satellite
    this.satelliteRef = this.db.object('satellite_dir');
    this.satelliteRef.snapshotChanges().subscribe(action => {
      this.satelliteDir = action.payload.val();
      this.satellitedata = this.getTreeViewDataStructure(this.satelliteDir);
      if (this.satelliteFirst) {
        this.satelliteFileList = Object.keys(this.satelliteDir);
        this.satelliteFirst = false;
      } else {
        this.changeDirectory('satellite', '');
      }
    });

    // store
    this.storeRef = this.db.object('saved_dir');
    this.storeRef.snapshotChanges().subscribe(action => {
      this.storeDir = action.payload.val();
      if (this.storeFirst) {
        this.storeFileList = Object.keys(this.storeDir);
        this.storeFirst = false;
      } else {
        this.changeDirectory('store', '');
      }
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
