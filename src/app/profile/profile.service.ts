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

readonly about2: string = `
I’m a Frontend Engineer specializing in Angular, TypeScript, and scalable dashboard development.
I build clean, high-performance applications that help businesses make faster and smarter decisions.

At eTranzact Global, I design and develop internal platforms and analytic dashboards used across the organization.

Integrating complex REST APIs.
Optimizing UI performance and responsiveness.
Implementing reusable components and clean architecture.
Creating intuitive user experiences that simplify workflows.

I enjoy solving real problems with code, translating business needs into reliable frontend solutions.
I focus heavily on writing maintainable code, improving UI/UX, and building features that scale.

Beyond engineering, I share carefully curated local and international tech job opportunities to support professionals in advancing their careers.

💼 What I Can Help You With:
Building custom Angular dashboards.
Developing internal tools and portals.
Converting Figma designs to responsive UI.
API integration & feature development.
Performance optimization.
Mentoring junior developers.

💻 Tech Stack:
Angular · TypeScript · RxJS · Angular Material · NgRx · REST APIs · Git

🌍 Let’s Connect:
Open to conversations on frontend engineering, UI/UX best practices, dashboard development, and global tech opportunities.
`;


// readonly about: string = `
// Frontend Engineer focused on building scalable dashboards, intuitive user experiences, 
// and maintainable, high-performance Angular applications. Passionate about clean architecture, 
// problem-solving, and delivering real value through code.
// `;

  readonly resumeurl: string = 'https://drive.google.com/file/d/118cHWW-GxtFhHS9ui_30QmO5jfa6U_XL/view?usp=sharing';

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
    id: 1,
    company: 'eTranzact Global',
    location: 'British Virgin Islands (Remote)',
    timeline: 'Nov 2024 – Present',
    role: 'Software Frontend Developer',
    work: `
    • Developed and integrated a Bulk Top-Up feature for seamless batch processing of multiple transactions.  
    • Integrated REST APIs for real-time data visualization and transaction processing.  
    • Built highly responsive and scalable internal dashboards using Angular & TypeScript.  
    • Collaborated with backend developers and UI/UX designers to streamline workflow processes.  
    • Optimized UI performance and user experience using RxJS and state management best practices.  
    • Technologies Used: Angular, Angular Material, NgRx, Bootstrap, TypeScript, Git.
    `
  },
  {
    id: 2,
    company: 'SwipeTech Limited',
    location: 'Lagos, Nigeria (Remote)',
    timeline: 'Feb 2023 – Mar 2025',
    role: 'Software Developer',
    work: `
    • Developed a responsive and scalable Expense Management System to streamline financial processes.  
    • Integrated loan solutions with Renmoney, enabling instant loan access using secure API connections.  
    • Built automated budgeting and reporting features that improved financial insights for users.  
    • Increased user success rate by 63% through UX improvements and new feature development.  
    • Improved page speed and scalability, achieving a 43% performance boost over the previous version.  
    • Collaborated with cross-functional teams to ensure timely delivery and smooth development.  
    • Engaged in Agile processes including sprint planning, backlog grooming, and retrospectives.  
    • Technologies Used: Angular, Angular Material, NgRx, Tailwind CSS, TypeScript, Git.
    `
  },
  {
    id: 3,
    company: 'Pyranex HQ Limited',
    location: 'Abuja, Nigeria (Remote)',
    timeline: 'Oct 2023 – Nov 2024',
    role: 'Frontend Software Engineer',
    work: `
    • Developed and optimized Human Capital Management (HCM) solutions for enterprise clients.  
    • Improved system response time by 50% through performance optimizations.  
    • Enhanced dashboard usability by 20% through UI/UX collaboration.  
    • Mentored junior developers and cultivated a collaborative engineering environment.  
    • Implemented automated tests and CI/CD pipelines for continuous integration and deployment.  
    • Reduced security threats and failures by 65% through proactive system checks and quality assurance.  
    • Conducted code reviews, improving code efficiency by 70%.  
    • Technologies Used: Angular, Angular Material, Tailwind CSS, Bootstrap, JavaScript, TypeScript, Git.
    `
  },
  {
    id: 4,
    company: 'Datalinks Nigeria Limited',
    location: 'Abuja, Nigeria (Remote)',
    timeline: 'Jan 2022 – Feb 2023',
    role: 'Software Developer',
    work: `
    • Developed responsive and scalable fintech solutions with high usability and performance.  
    • Improved end-user success rate by 30% through UI/UX enhancements.  
    • Boosted page performance by 25% through front-end optimization.  
    • Participated in Agile ceremonies for efficient sprint execution.  
    • Collaborated with backend engineers, designers, and product managers to deliver high-quality features.  
    • Technologies Used: Angular, Angular Material, NgRx, Tailwind CSS, TypeScript, Git.
    `
  },
  {
    id: 5,
    company: 'SohClick Technology Limited',
    location: 'Jos, Plateau State',
    timeline: 'Jan 2020 – Dec 2021',
    role: 'Software Developer Intern',
    work: `
    • Contributed to development of client applications as a Junior Developer.  
    • Worked on complex projects under senior developer mentorship.  
    • Collaborated with designers, project managers, and developers to build scalable solutions.  
    • Ensured cross-platform compatibility through consistent testing.  
    • Technologies Used: Angular, HTML, CSS, Bootstrap, Semantic UI, Git.
    `
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
