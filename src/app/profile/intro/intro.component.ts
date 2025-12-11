import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  cvUrl: string | undefined;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.cvUrl =  this.profileService.resumeurl;
  }

}
