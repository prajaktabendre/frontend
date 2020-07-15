import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { CourseService } from '../Course.service';
import { Course } from '../course';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.css']
})
export class UploadvideoComponent implements OnInit {
  title = 'Grasp it up';
  description = 'Upload course videos';
  constructor(public _authservice:RegistrationService) { }
  //corse=new Course;
  //msg='';
  ngOnInit(): void {
  }
 /* registerCourse()
  {
    this._service.sendCreatedCourse(this.corse).subscribe(
      data=>{
        console.log("response received");
      this.msg="success";
     this.msg="Course added Successfully";
      },
      error=>{
        console.log("exception occured");
        this.msg="Error in creating course try again ";
        
      }
    )
}*/
}