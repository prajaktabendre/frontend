import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NgForm}from '@angular/forms'; 
import{User}from '../user';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=new User();
msg=''  

constructor(private _router:Router,private _service:RegistrationService) { }

  ngOnInit(): void {
  }
loginUser()
{
 this._service.loginUserFromRemote(this.user).subscribe(
   data => {
      localStorage.setItem('loggedInUser',this.user.email);
      console.log("respone recieved");
      this.msg="Successful registration"
     // alert('SUCCESS!! :-');  
      this._router.navigate(['/myhomepage'])
  
    },
      error => {
        console.log("exception");
        alert('Invalid credentials');
        this.msg="Wrong credentials";
      }
  )
  //this._router.navigate(['/myhomepage'])
}
}
