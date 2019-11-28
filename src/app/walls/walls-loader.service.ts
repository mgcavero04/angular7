import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com/videos';

export interface Employee {
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
}
