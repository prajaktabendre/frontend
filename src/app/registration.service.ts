import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user:User;
private baseUrl='http://localhost:8080/api/employee';
private basel='http://localhost:8080/api/user';

  constructor(private _http : HttpClient,private _router:Router) {
   }
 
  public loginUserFromRemote(user :User):Observable<any>{
    
return this._http.post<any>("http://localhost:8080/api/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/api/employee/add",user)
  }
  updateUser(id:number,value:any):Observable<Object>{
    //return this._http.put(`${this.baseUrl}/add/${this.pass_id}`,value)
    return this._http.put(`${this.baseUrl}/add/${id}`,value)
  }
  getemp(mail:string):Observable<any>
  {
    return this._http.get(`${this.basel}/${mail}`);
  }
  getfid(id:number):Observable<any>
  {
    return this._http.get(`${this.baseUrl}/facilator/${id}`);
  }
  handleError(error: Response)
  {

  }
  loggedIn(){
    return !!localStorage.getItem('loggedInUser');
  
  }
  logOutUser(){
    localStorage.removeItem('loggedInUser')
    this._router.navigate(['/login'])
  }

  public getUserIds = new BehaviorSubject<any> (null);
  idsValue = this.getUserIds.asObservable();
       idEvent(e:any)
       {
         this.getUserIds.next(e);
       }


}
