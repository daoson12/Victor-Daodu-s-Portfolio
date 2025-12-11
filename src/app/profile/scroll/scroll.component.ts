import { Component, OnInit, Inject, HostListener, OnDestroy } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, OnDestroy {
  windowScrolled = false;
  private scrollSubject$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.scrollSubject$.next();
  }

  ngOnInit(): void {
    this.scrollSubject$
      .pipe(
        debounceTime(50),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.windowScrolled =
          window.pageYOffset > 100 ||
          this.document.documentElement.scrollTop > 100 ||
          this.document.body.scrollTop > 100;
      });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
