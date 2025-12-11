import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  about1: string = '';
  about2: string = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // this.about1 = this.profileService.about;
    this.about2 = this.profileService.about2;
  }
  
}
