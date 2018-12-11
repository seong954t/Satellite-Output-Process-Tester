import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private serverUrl = 'http://192.168.100.103:5002';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  getStartFd() {
    return this.http.get(`${this.serverUrl}/start/FD/1`);
  }

  getStopFd() {
    return this.http.get(`${this.serverUrl}/stop/FD/`);
  }
}