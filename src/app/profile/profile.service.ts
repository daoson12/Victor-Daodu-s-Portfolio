import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, Education, Experience } from './models/profile.models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Group teams',
      desc: '',
      livedemo: 'https://teamgrouping.netlify.app/',
      githurl: 'https://github.com/daoson12/Team-grouping-app',
      mediumlink: '',
      imgUrl: 'assets/images/teamgrouping.png',
      tech: 'Angular 13 , Bootstrap'
    },
    {
      id: 2,
      title: 'Blood Donation Application UI',
      desc: '',
      livedemo: 'https://blood-dononation.netlify.app/#/',
      githurl: 'https://github.com/daoson12/BDM-System-Ui',
      mediumlink: '',
      imgUrl: 'assets/images/blood-donor.png',
      tech: 'Angular 10, CSS, HTML, Bootstrap'
    },
    {
      id: 3,
      title: 'Angular with unsplash image api - demonstrating lazy-loading',
      desc: '',
      livedemo: 'imgs-gallery.herokuapp.com/',
      githurl: 'https://github.com/daoson12/image-gallery',
      mediumlink: '',
      imgUrl: 'assets/images/image-lazyloading.png',
      tech: 'Angular 10, unsplash image api, express server'
    },
    {
      id: 4,
      title: 'COVID 19 Tracker (Statistics) Version 1 app Using Angular',
      desc: '',
      livedemo: 'https://corona-live-tracking.herokuapp.com/#/',
      githurl: 'https://github.com/daoson12/corona-live-tracking-app',
      mediumlink: '',
      imgUrl: 'assets/images/covid-v1.png',
      tech: 'HTML, CSS, ANGULAR-10, Javascript, External Api, Express server'
    },
    {
      id: 5,
      title: 'COVID 19 Tracker (Statistics) Version 2 app Using Angular',
      desc: '',
      livedemo: 'https://covid19-live-tracking-app.herokuapp.com/',
      githurl: 'https://github.com/daoson12/Covid19-live-tracking-app-version2',
      mediumlink: '',
      imgUrl: 'assets/images/covid-v2.png',
      tech: 'HTML 5, CSS, ANGULAR-10, Javascript, External Api, Express server'
    },
    {
      id: 6,
      title: 'COVID 19 Tracker (Statistics) Version 3 app Using Angular',
      desc: '',
      livedemo: 'https://coronadatatracker.herokuapp.com/',
      githurl: 'https://github.com/daoson12/covidtracker-version-3',
      mediumlink: '',
      imgUrl: 'assets/images/covid-v3.png',
      tech: 'HTML 5, CSS 3, Boostrap 4, ANGULAR-10, Javascript, External Api, Express server'
    },
    {
      id: 7,
      title: 'Budget Calculator',
      desc: '',
      livedemo: 'https://budget-application.herokuapp.com/',
      githurl: 'https://github.com/daoson12/Budget-Calculator',
      mediumlink: '',
      imgUrl: 'assets/images/budgetCal.png',
      tech: 'HTML 5, SCSS, Boostrap 4, ANGULAR-10, Javascript,'
    },
    {
      id: 8,
      title: 'Online Learning Landing page Site Demo',
      desc: '',
      livedemo: 'https://online-class-learning.netlify.app/',
      githurl: 'https://github.com/daoson12/Online-Learning-Website-landing-page-UI',
      mediumlink: '',
      imgUrl: 'assets/images/online-class.png',
      tech: 'HTML 5, CSS, Boostrap 4, ANGULAR-10, Javascript,'
    }
  ];

  readonly about2: string = `Software Developer with 2.5+ years of experience .
  Worked with DataLinks and  agile methodologies .
  Expertise in Angular 2+ All versions, Javascript, JAVA, Node JS and UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap, PrimeNG, Semantic UI, Bulma, Foundation, Ant Design, MongoDB, Firebase, and MYSQL`;

  readonly about: string = 'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  readonly resumeurl: string = 'https://drive.google.com/file/d/1o2t2SZsXPuKRdzjMNQM62hQ7mCuQPRxX/view?usp=sharing';

  private readonly skillsData: Skill[] = [
    {
      id: '1',
      skill: 'ANGULAR 2+',
      progress: '85%'
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '50%'
    },
    {
      id: '3',
      skill: 'JAVASCRIPT JQUERY',
      progress: '80%'
    },
    {
      id: '4',
      skill: 'SQL , MYSQL,MONOGO, FIREBASE',
      progress: '50%'
    },
    {
      id: '5',
      skill: 'BOOTSTRAP, PRIMENG, SEMANTIC UI, BULMA, FOUNDATION, ANT DESIGN',
      progress: '90%'
    },
    {
      id: '6',
      skill: 'JAVA',
      progress: '60%'
    }
  ];

  private readonly educationData: Education[] = [
    {
      id: '1',
      from_to_year: '2016 - 2021',
      education: 'Bachelor\'s Degree',
      stream: 'Bachelor of Computer Science Education',
      info: `The University of Jos, abbreviated as Unijos, is a Federal University in Jos,
       Plateau State, central Nigeria.`,
      institution: 'UNIVERSITY OF JOS, NIGERIA.',
      grade: '2.1 CGPA',
      sememterGrade: '3.0',
      certificate: 'B.Sc (ED) in Computer Science Education '
    },
    {
      id: '3',
      from_to_year: '2008 - 2014',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'COOPER MEMORIAL SECONDARY SCHOOL LANGTANG NORTH LGT, PLATEAU',
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.`,
      grade: '84%',
      sememterGrade: '80',
      certificate: 'Science',
      position: 'Health Prefect'
    }
  ];

  private readonly experienceData: Experience[] = [
    {
      id: 4,
      company: ' Datalinks Nigeria Limited ',
      location: 'Abuja, Remote',
      timeline: 'June 2022 to Present',
      role: 'Fontend Developer',
      work: 'Working as a Frontend developer .Responsible for handling the UI in Angular and Consuming the api calls in .NET C#.'
    },
    {
      id: 3,
      company: 'Carflix Multi-venture Service Nig. Limited',
      location: 'Remote',
      timeline: 'January 2021 to Present -Contract',
      role: 'Software Developer',
      work: `Technologies : Angular , Node JS , Python, Java.
      Worked on the web application built in Angular for different business and Car Market Campaigns.
      Contributed on developing the Carflix enrollment
      application,E-marketing application for on boarding car deal.`
    },
    {
      id: 2,
      company: 'SohClick Technology Solutions Ltd',
      location: 'Jos, Nigeria',
      timeline: 'December 2019 - May 2020',
      role: 'Full stack Developer- Internship',
      work: `Technologies : Angular , Node JS , Java.
      I also took part in the development of an inventory solution for a business enterprise.
      Created sections like templates several modules, like Product, Customers, Suppliers, Customer E-Wallet,
      product Returns, Reports etc.`
    }
  ];

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(this.skillsData);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getEducation(): Observable<Education[]> {
    return of(this.educationData);
  }

  getExperience(): Observable<Experience[]> {
    return of(this.experienceData);
  }
}
