import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private serverUrl: string;
  httpHeader = new HttpHeaders({ timeout: '200' });
  constructor(private http: HttpClient) { }

  getStart(mode: string, interval: string) {
    return this.http.post(`${this.serverUrl}/start/${mode}/${interval}`, {timeout: 2000});
  }

  getStop(mode: string) {
    return this.http.post(`${this.serverUrl}/stop/${mode}/`, {timeout: 2000});
  }

  setServerUrl(serverUrl: string) {
    this.serverUrl = `http://${serverUrl}:5002`;
    console.log(this.serverUrl);
  }
}
