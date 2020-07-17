import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.css']
})
export class UploadvideoComponent implements OnInit {
  title = 'Grasp it up';
  description = 'Upload media files';
  constructor(public _authservice:RegistrationService) { }

  ngOnInit(): void {
  }

}
