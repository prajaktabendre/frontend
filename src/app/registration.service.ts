import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient,private _router:Router) { }
 
  public loginUserFromRemote(user :User):Observable<any>{
return this._http.post<any>("http://localhost:8080/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/register",user)
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
}
