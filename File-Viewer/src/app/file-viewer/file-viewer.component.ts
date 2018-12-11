import { Component, OnInit } from '@angular/core';

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

  getDirectoryData() {
    this.satelliteDir = {
      'COMS': {
        'GOCI': {
          'ELA': {
            '2018': {
              '12': {
                '10': {
                  'COMS_GOCI_ELA_20181210151237': 'txt',
                  'COMS_GOCI_ELA_20181210151337': 'txt',
                  'COMS_GOCI_ELA_20181210151636': 'txt',
                  'COMS_GOCI_ELA_20181210152413': 'txt',
                  'COMS_GOCI_ELA_20181210152513': 'txt',
                  'COMS_GOCI_ELA_20181210154405': 'txt',
                  'COMS_GOCI_ELA_20181210160726': 'txt',
                  'COMS_GOCI_ELA_20181210160754': 'txt'
                }
              }
            }
          },
          'FD': {
            '2018': {
              '12': {
                '10': {
                  'COMS_GOCI_FD_20181210151216': 'txt'
                }
              }
            }
          },
          'LA': {
            '2018': {
              '12': {
                '10': {
                  'COMS_GOCI_LA_20181210152430': 'txt',
                  'COMS_GOCI_LA_20181210152630': 'txt'
                }
              }
            }
          }
        }
      }
    };
    this.storeDir = { ...this.satelliteDir };
    this.satellitePath = '/';
    this.storePath = '/';
    this.satelliteFileList = Object.keys(this.satelliteDir);
    this.storeFileList = Object.keys(this.storeDir);
  }

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
      this.storePath = currentPath + file + '/';
    } else {
      this.satellitePath = currentPath + file + '/';
    }
  }

  setPostfix(currentDir): Array<String> {
    const currentList = Object.keys(currentDir);
    for (let i = 0; i < currentList.length; i++) {
      const key = currentList[i];
      if (typeof(currentDir[key]) === 'string' ) {
        currentList[i] = key + '.' + currentDir[key];
      } else {
        break;
      }
    }
    return currentList;
  }

  constructor() { }

  ngOnInit() {
    this.getDirectoryData();
  }

}
