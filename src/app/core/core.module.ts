import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../profile/header/header.component';
import { FooterComponent } from '../profile/footer/footer.component';
import { ScrollComponent } from '../profile/scroll/scroll.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollComponent
  ]
})
export class CoreModule { }
