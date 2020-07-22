import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Course } from '../course';
import {Coursechapter} from '../coursechapter'
import { ChapterService } from '../chapter.service';
import { UploadFileService } from '../upload-file.service';
import { CourseService } from '../Course.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-chaper',
  templateUrl: './add-chaper.component.html',
  styleUrls: ['./add-chaper.component.css']
})
export class AddChaperComponent implements OnInit {
  cid:number;
  ctitle=localStorage.getItem('courseId');
  thiscourse:Course
    selectedFiles: FileList;
    currentFileUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    constructor(private uploadService: UploadFileService,private courseService:CourseService,public _authservice:RegistrationService) { }
  
    ngOnInit(): void {
      this.thiscourse=new Course();
      this.courseService.getCoursebyEmail(this.ctitle).subscribe(
        data =>{
          console.log(data);
          
         
          this.thiscourse=data;
          this.cid=this.thiscourse.courseId;
       //   this.username=this.thisUser.username;
         // this.role=this.thisUser.role;
          console.log(this.thiscourse.courseId)
  
        })
      
    }
  
    selectFile(event) {
      this.selectedFiles = event.target.files;
    }
  
    upload() {
      this.progress.percentage = 0;
  
      this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
       
   //this.uploadService.pushFileToStorage(this.thiscourse.courseId,this.currentFileUpload).subscribe(event=>{
   if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });
      this.uploadService.updatevidurl(this.currentFileUpload,this.thiscourse.courseId).subscribe(
        data=>
      {
  console.log("img uuuu")
  this.thiscourse=new Course();
  },
      error=>console.log(error)
      )
  
      this.selectedFiles = undefined;
     
      
      }
  }
  