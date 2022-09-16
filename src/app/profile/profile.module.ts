import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmV_0M8b94hw_aZGNElDpkx0aZYbio1Lg",
  authDomain: "my-portfolio-contact-me.firebaseapp.com",
  projectId: "my-portfolio-contact-me",
  storageBucket: "my-portfolio-contact-me.appspot.com",
  messagingSenderId: "818009715457",
  appId: "1:818009715457:web:c4490ca3800e901c96e100"
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    SplitPipe,


  ],
})
export class ProfileModule { }
