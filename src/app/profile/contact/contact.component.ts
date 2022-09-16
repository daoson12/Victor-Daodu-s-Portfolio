import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:any=FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.contactForm=this.fb.group({
      name:['', Validators.required],
      subject:['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required]

    })
  }

  contactMe(value:any){
    console.log(value);

  }

}
