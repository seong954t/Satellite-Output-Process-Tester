import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SatelliteBackupComponent } from './satellite-backup/satellite-backup.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { RecSelectorComponent } from './rec-selector/rec-selector.component';
import { CurrentFileComponent } from './current-file/current-file.component';
import { FormsModule } from '@angular/forms';
import { ServerStatusComponent } from './server-status/server-status.component';



@NgModule({
  declarations: [
    AppComponent,
    SatelliteBackupComponent,
    DemoComponent,
    FileViewerComponent,
    RecSelectorComponent,
    CurrentFileComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
