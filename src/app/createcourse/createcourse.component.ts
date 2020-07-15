import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../Course.service';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Course } from '../course';
import { User } from '../user';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {
  id:any;
  user:User;
  userIds:Subscription;
  constructor(private _service:CourseService,public _authservice:RegistrationService,private _router:Router) {
    
   }
  corse=new Course;
  msg='';
    ngOnInit(): void {

  
    }
    registerCourse()
    {
      this._service.sendCreatedCourse(this.corse).subscribe(
        data=>{
          console.log("response received");
        this.msg="success";
      alert('Course added Successfully');
       this._router.navigate(['/uploadvideo']);
        },
        error=>{
          console.log("exception occured");
          this.msg="Error in creating course try again ";
          
        }
      )
      var user=new User();
      user.id=1;
    }
    

  }
  