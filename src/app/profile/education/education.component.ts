import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import { Education } from '../models/profile.models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit, OnDestroy {
  education: Education[] = [];
  private destroy$ = new Subject<void>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getEducation()
      .pipe(takeUntil(this.destroy$))
      .subscribe((education: Education[]) => {
        this.education = education;
      });
  }

  trackByEducationId(index: number, education: Education): string {
    return education.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
