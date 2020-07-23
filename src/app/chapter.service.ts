import { Injectable } from '@angular/core';
import { Coursechapter } from './coursechapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http:HttpClient) { }
  getCourseChapter():Observable<any>{
    return this.http.get("http://localhost:8080/api/chapter/all/1")
  }
}
