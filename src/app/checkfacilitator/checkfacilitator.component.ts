import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-checkfacilitator',
  templateUrl: './checkfacilitator.component.html',
  styleUrls: ['./checkfacilitator.component.css']
})
export class CheckfacilitatorComponent implements OnInit {

  constructor(public _authservice:RegistrationService) { }

  ngOnInit(): void {
  }

}
