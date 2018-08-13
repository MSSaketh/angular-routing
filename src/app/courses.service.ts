import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Icourses } from './courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private _url = '/assets/data/courses.json';

  getCourses(): Observable<Icourses[]> {
    return this.http.get<Icourses[]>(this._url);
  }
}
