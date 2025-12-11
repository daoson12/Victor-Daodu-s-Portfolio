import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import { Experience } from '../models/profile.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit, OnDestroy {
  workExperience: Experience[] = [];
  private destroy$ = new Subject<void>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getExperience()
      .pipe(takeUntil(this.destroy$))
      .subscribe((experience: Experience[]) => {
        this.workExperience = experience;
      });
  }

  trackByExperienceId(index: number, experience: Experience): number {
    return experience.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
