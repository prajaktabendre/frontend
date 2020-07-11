import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:8082/courses';
  courses: Course[];
  constructor(private httpClient : HttpClient) { }
  
  sendCreatedCourse(course:Course):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/addcourse",course)
  
  }
  getCourse():Observable<Course[]>{
    //const searchurl=`http://localhost:8080/course/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<Course[]>(this.baseUrl)
  }
  getCourseList():Observable<Course[]>{  
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.courses)
    );
  }

}
  interface GetResponse{
  _embedded:{
    courses: Course[];
  }
}
