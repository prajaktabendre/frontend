import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {

  constructor(public _authservice:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
uploadvid()
{
  this._router.navigate(['/uploadvideo']);
}
}
