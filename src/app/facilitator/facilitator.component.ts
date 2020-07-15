import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Course.service';
import { Course } from '../course';
import { RegistrationService } from '../registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-facilitator',
  templateUrl: './facilitator.component.html',
  styleUrls: ['./facilitator.component.css']
})
export class FacilitatorComponent implements OnInit {
 
  user:User;
  Facilator:FacilitatorComponent;
  facilatorId:any;
  userIds:Subscription;
  constructor(private _service:CourseService,public _authservice:RegistrationService,private _router:Router) {
    
   }
  corse=new Course;
  msg='';
    ngOnInit(): void {
      this.userIds =this._authservice.idsValue.subscribe(obj => {
        console.log("object value");
        console.log(obj);
        this.facilatorId=obj;
  
  
   });
   
  
    }
   
    createCourse()
    {
      this._authservice.getfid(this.id).subscribe(
        data=>{
        console.log(data)
        this.Facilator.facilatorId=data;
        this._router.navigateByUrl('/createcourse/:'+this.Facilator.facilatorId);
        },
        error=>
        console.log(error)
      )    
    }

  }
  