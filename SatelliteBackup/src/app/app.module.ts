import { SatelliteBackupModule } from './satellite-backup/satellite-backup.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SatelliteBackupComponent } from './satellite-backup/satellite-backup.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';



@NgModule({
  declarations: [
    AppComponent,
    SatelliteBackupComponent,
    DemoComponent,
    FileViewerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SatelliteBackupModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
