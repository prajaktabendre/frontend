import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:8080/api/course';
  courses: Course[];
  constructor(private httpClient : HttpClient) { }
  
  sendCreatedCourse(id:number,course:Course):Observable<any>{
    console.log("In send...")
    return this.httpClient.post<any>(this.baseUrl+'/add/course/'+id,course)
  
  }
  getCourseID(coursetitle:string):Observable<any>{
    console.log(coursetitle);
  return this.httpClient.get<any>(this.baseUrl+'/'+coursetitle)
  }
  
  getCourseById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+'/facilators/get/'+id)
  }
  getCourse():Observable<Course[]>{
    //const searchurl=`http://localhost:8080/course/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<Course[]>(this.baseUrl+'/all')
  }
  getCourseList():Observable<Course[]>{  
  return this.httpClient.get<GetResponse>(this.baseUrl+'/all').pipe(
      map(response => response._embedded.courses)
    );
  }

}
  interface GetResponse{
  _embedded:{
    courses: Course[];
  }
}
