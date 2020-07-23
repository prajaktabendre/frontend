import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { CourseService } from '../Course.service';
import{Course} from '../course';
import { User } from '../user';


@Component({
  selector: 'app-myhomepage',
  templateUrl: './myhomepage.component.html',
  styleUrls: ['./myhomepage.component.css']
})
export class MyhomepageComponent implements OnInit {
  co: Course[]
  msg='ss'
  users=localStorage.getItem('loggedInUser');
  thisUser:User
  public id:number
  username:string
  role:string
 cors=new Course;
  coursename:any;
title:any;
  constructor(public _authservice:RegistrationService,private courser:CourseService,private _router:ActivatedRoute,private _route:Router) {
    
   }

  ngOnInit(): void {
    this.thisUser=new User();
    
    this._router.paramMap.subscribe(() => {
      this.listCourses();
    }
   
  
    );
    this._authservice.getUserByEmail(this.users).subscribe(
      data =>{
        console.log(data);
        
       
        this.thisUser=data;
        this.id=this.thisUser.id;
        this.username=this.thisUser.username;
        this.role=this.thisUser.role;
        console.log(this.thisUser.username)

      })
    
  
 }
  listCourses()
  {
   
    this.courser.getCourse().subscribe(
      data =>{
        console.log(data);
        this.title=this.cors.courseTitle;
        console.log(this.cors.courseTitle)
        this.co=data;
      }
    )
  }
  
    Search()
    {
      if(this.coursename!==""){
        this.co=this.co.filter(res=>{return res.courseTitle.toLocaleLowerCase().match(this.coursename.toLocaleLowerCase());
        });
      }else if(this.coursename==""){
        this.ngOnInit();
      }
    }
  beFacilator()
  {
    this._authservice.getUserByEmail(this.users).subscribe(
      data =>{
        console.log(data);
        
       
        this.thisUser=data;
        console.log(this.thisUser.id)

      })
      if(this.role=="LEARNER"){
    
    this._authservice.becomeFacilator(this.thisUser.id,this.thisUser).subscribe(
      data =>{console.log("be facilator");
        this.thisUser=new User();
     },
      error=>console.log(error));
    }   
      this._route.navigate(['/facilator',this.id]);
       
  
    
   }
    
   viewcourse()
   {
     this.cors.courseTitle=document.getElementById("aaa").getAttribute("name");
    
     this.courser.getCoursebyEmail(this.cors.courseTitle).subscribe(
       data=>{
         console.log(data);
      this.id=data;
       },error=>console.log(error)
     )
     console.log(this.cors.courseTitle)
    localStorage.setItem('coursedetails',this.cors.courseTitle)
    console.log(this.cors.courseTitle)
    this._route.navigate(['/enrollcourse',this.cors.courseTitle])
  }
  
   
  
  
  }
  
