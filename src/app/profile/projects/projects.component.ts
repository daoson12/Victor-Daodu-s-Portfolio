import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import { Project, PaginationConfig } from '../models/profile.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, OnDestroy {
  config: PaginationConfig = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 0
  };
  projects: Project[] = [];
  private destroy$ = new Subject<void>();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        this.config.totalItems = projects.length;
      });
  }

  pageChanged(event: number): void {
    this.config.currentPage = event;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
