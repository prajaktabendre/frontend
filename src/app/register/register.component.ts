import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new User();
  msg='';

  flag:boolean;
constructor(private _service :RegistrationService,private _router : Router) { }

  ngOnInit() {

  }
registerUser()
{
  
  this._service.registerUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response received");
    this.msg="success";
 this.flag=true;
 alert('Registered successfully');
    this._router.navigate(['/login'])

   this.msg="Registration Successful";
    },
    error=>{
      console.log("exception occured");
      this.flag=false;
      template:`
      <ng-template>
      hello
      <div *ngIf="regform.form.invalid">`;alert('invalid form');`</div>
      </ng-template>`
      alert('Email already exists')
      this.msg="Email already exists";
      
    }
  )
}

}
