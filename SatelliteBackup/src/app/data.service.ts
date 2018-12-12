import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private serverUrl = 'http://192.168.100.103:5002';

  constructor(private http: HttpClient) { }

  getStart(mode: string, interval: string) {
    return this.http.get(`${this.serverUrl}/start/${mode}/${interval}`);
  }

  getStop(mode: string) {
    return this.http.get(`${this.serverUrl}/stop/${mode}/`);
  }
}
