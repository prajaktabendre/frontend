import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 public baseUrl:string="http://localhost:8080/api/employee";

  constructor(private _http : HttpClient,private _router:Router) { }
 
  public loginUserFromRemote(user :User):Observable<any>{
return this._http.post<any>("http://localhost:8080/api/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/api/employee/add",user)
  }
  handleError(error: Response)
  {

  }
  loggedIn(){
    return !!localStorage.getItem('loggedInUser')
  
  }
  logOutUser(){
    localStorage.removeItem('loggedInUser')
    this._router.navigate(['/login'])
  }
  getUser(id:number):Observable<any>{
    console.log("in get ....")
    return this._http.get(this.baseUrl+'/'+id)
  }
  getUserByEmail(email:string):Observable<any>{
    console.log(email)
    return this._http.get(this.baseUrl+'/email/'+email)
  }
  
 public becomeFacilator(id:number,value:any):Observable<any>
  {

    console.log(id)
    return this._http.put(this.baseUrl+'/add/'+id,value)
  }
}
