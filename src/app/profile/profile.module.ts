import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

import { SplitPipe } from './split.pipe';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollComponent } from './scroll/scroll.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ScrollComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    SplitPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class ProfileModule { }
