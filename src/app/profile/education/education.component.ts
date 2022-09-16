import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.education =  this.profileService.education();
  }

}
