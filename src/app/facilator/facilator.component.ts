import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Course } from '../course';
import { CourseService } from '../Course.service';

@Component({
  selector: 'app-facilator',
  templateUrl: './facilator.component.html',
  styleUrls: ['./facilator.component.css']
})
export class FacilatorComponent implements OnInit {
thisUser:User;
  username:string
  empId:number
  co: Course[]

  constructor(private route: ActivatedRoute,public _authservice:RegistrationService,private _route:Router,private courser:CourseService) { }

  ngOnInit(): void {
    this.thisUser=new User();
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.empId=id;
    console.log(this.empId);
    this._authservice.getUser(id).subscribe(
      data=>{
        console.log(data)
        this.thisUser=data;
        this.username=this.thisUser.username
        
      }
    )
   

    
  /*  this.route.paramMap.subscribe(() => {
      this.listCourses();
    }*/
   
   
    
   
  }
  createCourse()
  {
    console.log("called..")
    this._route.navigate(['/create',this.empId])
  }
 /* listCourses(){
    this.courser.getCourseById(this).subscribe(
      data =>{
        console.log(data);
        this.co=data;
      }
    )*/

  }





