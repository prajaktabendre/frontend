import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../Course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-enrollcourse',
  templateUrl: './enrollcourse.component.html',
  styleUrls: ['./enrollcourse.component.css']
})
export class EnrollcourseComponent implements OnInit {
sess=localStorage.getItem("coursedetails");
course:Course[];
co:Course

coursename:any;
  constructor(private coService:CourseService,private route:ActivatedRoute,public _authservice:RegistrationService) { }

  ngOnInit(): void {
   this.co=new Course;
 
    const courseid:number =+this.route.snapshot.paramMap.get('id');
 // this.route.paramMap.subscribe(() => {
    //this.dispcourse();
    this.coService.getcourseid(courseid).subscribe(
      data=>{
        this.co=data;
      },
      error=>console.log(error)
      
    )


  }

  Search()
  {
    if(this.coursename!==""){
      this.course=this.course.filter(res=>{return res.courseTitle.toLocaleLowerCase().match(this.coursename.toLocaleLowerCase());
      });
    }else if(this.coursename==""){
      this.ngOnInit();
    }
  }
  enroll(co:Course)
  {
console.log(`enroll the course : ${co.courseTitle}`)
  }
}
