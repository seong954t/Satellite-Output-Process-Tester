import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private serverUrl: string;
  httpHeader = new HttpHeaders({ timeout: '200' });
  constructor(private http: HttpClient) { }

  getStart(mode: string, interval: string) {
    return this.http.get(`${this.serverUrl}/start/${mode}/${interval}`);
  }

  getStop(mode: string) {
    return this.http.get(`${this.serverUrl}/stop/${mode}/`);
  }

  setServerUrl(serverUrl: string) {
    this.serverUrl = `http://${serverUrl}:5002`;
    console.log(this.serverUrl);
  }
}
