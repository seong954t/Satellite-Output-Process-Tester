import { SatelliteBackupModule } from './satellite-backup/satellite-backup.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SatelliteBackupComponent } from './satellite-backup/satellite-backup.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
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
    SatelliteBackupModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
