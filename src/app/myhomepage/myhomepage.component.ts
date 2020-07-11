import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { CourseService } from '../Course.service';
import{Course} from '../course';

@Component({
  selector: 'app-myhomepage',
  templateUrl: './myhomepage.component.html',
  styleUrls: ['./myhomepage.component.css']
})
export class MyhomepageComponent implements OnInit {
  co: Course[];
  msg='ss'
  constructor(public _authservice:RegistrationService,private courser:CourseService,private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(() => {
      this.listCourses();
    }
  
    );
    
    }
  listCourses()
  {
   
    this.courser.getCourse().subscribe(
      data =>{
        this.co=data;
      }
    )
  }
  }
  
