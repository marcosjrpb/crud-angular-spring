import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API ='/assets/courses.js';

  constructor(private httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Course[]>(this.API)
    .pipe(
  first(),
      tap(courses => console.log(courses) )
    );
  }
}


