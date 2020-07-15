import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { CourseService } from '../Course.service';
import{Course} from '../course';
import { User } from '../user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-myhomepage',
  templateUrl: './myhomepage.component.html',
  styleUrls: ['./myhomepage.component.css']
})
export class MyhomepageComponent implements OnInit {
  co: Course[];
  user:User;
  id:any;
  userIds:Subscription;
 
  msg='ss'
  coursename:any;
  constructor(public _authservice:RegistrationService,private courser:CourseService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user =new User();
    //this.id = this._router.snapshot.params['id'];
    this._route.paramMap.subscribe(() => {
      this.listCourses();
    }  
    );
    this.userIds =this._authservice.idsValue.subscribe(obj => {
      console.log("object value");
      console.log(obj);
      this.id=obj;


 });

    
    }
    updateUser()
    {this._authservice.updateUser(this.id,this.user).subscribe(data=>
      
      console.log(data),error=>console.log(error));
this.user=new User();
this._router.navigate(['/facilitator'])
//this._router.navigateByUrl('/facilitator');
    }
  listCourses()
  {
   
    this.courser.getCourse().subscribe(
      data =>{
        this.co=data;
      }
    )
  }
  Search()
  {
    if(this.coursename!=""){
      this.co=this.co.filter(res=>{return res.courseTitle.toLocaleLowerCase().match(this.coursename.toLocaleLowerCase());
      });
    }else if(this.coursename==""){
      this.ngOnInit();
    }

    }
    check()
    {
this.updateUser();
    }
  }
  
  
