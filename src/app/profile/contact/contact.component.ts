import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:any=FormGroup
  submitted: boolean = false;

  private form:AngularFirestoreCollection<any> | undefined;



  constructor(private fb:FormBuilder,
    private toastr: ToastrService,
    private firestore:AngularFirestore){}

  ngOnInit() {

    this.form=this.firestore.collection('enquiry');
    this.contactForm=this.fb.group({
      name:['', Validators.required],
      subject:['', Validators.required],
      email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message:['', Validators.required]

    })
  }


  get f() { return this.contactForm.controls; }

  contactMe(value:any){

    this.form?.add(value).then((res:any)=>{
      this.toastr.success('Sent!', 'Successfully!');
    }).catch(
      (err:any)=>{
        this.toastr.error('', 'Error');

      }
    )
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.toastr.error('', 'Invalid Fields');
      return;
    }
  }
  }


