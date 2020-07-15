import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import {Subscription} from 'rxjs';
import {RegistrationService} from './registration.service';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:8080/api/course/all';
  private fetch_url='http://localhost:8080/api/course/add/';
 
  courses: Course[];
  

  constructor(private httpClient : HttpClient, private registrationService:RegistrationService) { 
  }
  //facilatorId=user.id;
  sendCreatedCourse(course:Course):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/api/course/add/1",course)
  
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
