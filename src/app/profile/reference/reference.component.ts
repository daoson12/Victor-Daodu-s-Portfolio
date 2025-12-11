import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferenceComponent {
  constructor() { }
}
