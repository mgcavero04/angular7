import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com/videos';
// Configure the amount of latency and jitter to simulate
const apiLatency = 100;
// Set to 3000 to see that out-of-order replies don't cause any problem:
const apiJitter = 100;

export interface Employee {
    id: string;
    title: string;
    author: string;
  }

@Injectable({
  // This service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class WallsLoaderService {
  constructor(private http: HttpClient) {}

  loadEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(apiUrl)
      .pipe(map(employees => employees.slice(0, 5)));
  }
  getList(searchText: string): Observable<Employee[]> {
    console.log('searchText:', searchText);
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
    const params = new HttpParams()
      .set('q', searchText)
      .set('_limit', '20');

    return this.http
      .get<Employee[]>(apiUrl, { params })
      .pipe(delay(randomDelay()));
  }
}
  function randomDelay() {
    return Math.round(apiLatency + Math.random() * apiJitter);
  }





