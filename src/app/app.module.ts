import { SatelliteBackupModule } from './satellite-backup/satellite-backup.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SatelliteBackupComponent } from './satellite-backup/satellite-backup.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    SatelliteBackupComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    SatelliteBackupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
