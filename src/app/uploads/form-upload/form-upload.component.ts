import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/Course.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  cid:number;
  ctitle=localStorage.getItem('courseId');
  thiscourse:Course
    selectedFiles: FileList;
    currentFileUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    constructor(private uploadService: UploadFileService,private courseService:CourseService) { }
  
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
      this.uploadService.updateurl(this.currentFileUpload,this.thiscourse.courseId).subscribe(
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
  