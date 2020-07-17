import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Course } from '../course';
import { CourseService } from '../Course.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  thisUser:User;
  username:string
  empId:number
  corse=new Course;
  cid:number;
  msg='';
  
 

  constructor(private route: ActivatedRoute,public _authservice:RegistrationService,private _route:Router,private cour:CourseService,private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.thisUser=new User();
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.empId=id;
    console.log(this.empId);
    var date = new Date();
    console.log(this.datePipe.transform(date,"yyyy-MM-dd")); //output : 2018-02-13
    this.corse.publishedDate=this.datePipe.transform(date,"yyyy-MM-dd");

    this._authservice.getUser(id).subscribe(
      data=>{
        console.log(data)
        this.thisUser=data;
        this.username=this.thisUser.username
        
      }
    )
   
  }
  registerCourse(){

    this.cour.sendCreatedCourse(this.empId,this.corse).subscribe(
      data =>{
        localStorage.setItem('courseId',this.corse.courseTitle)
        console.log("Response...")
        console.log(data);
        console.log(this.corse.courseId)
        alert(' course Registered successfully');
        this._route.navigate(['/uploadvideo'])
      },
      error =>
      {
        console.log("Failled...");
      }
    )

  }

}
