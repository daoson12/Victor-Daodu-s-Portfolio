import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import { Skill } from '../models/profile.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: Skill[] = [];
  private destroy$ = new Subject<void>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe((skills: Skill[]) => {
        this.skills = skills;
      });
  }

  trackBySkillId(index: number, skill: Skill): string {
    return skill.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
