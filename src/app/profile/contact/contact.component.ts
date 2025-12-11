import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { ContactForm } from '../models/profile.models';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  private formCollection!: AngularFirestoreCollection<ContactForm>;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private firestore: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.formCollection = this.firestore.collection<ContactForm>('enquiry');
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
      ]],
      message: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  get f(): any {
    return this.contactForm.controls;
  }

  contactMe(value: ContactForm): void {
    this.submitted = true;

    // Validate FIRST
    if (this.contactForm.invalid) {
      this.toastr.error('Please fill all required fields correctly', 'Invalid Form');
      return;
    }

    // Sanitize inputs before submission
    const sanitizedValue: ContactForm = {
      name: this.sanitizer.sanitize(SecurityContext.HTML, value.name) || '',
      email: this.sanitizer.sanitize(SecurityContext.HTML, value.email) || '',
      subject: this.sanitizer.sanitize(SecurityContext.HTML, value.subject) || '',
      message: this.sanitizer.sanitize(SecurityContext.HTML, value.message) || ''
    };

    // Submit to Firestore AND send email
    Promise.all([
      // Save to Firestore for records
      this.formCollection.add(sanitizedValue),
      // Send email notification via EmailJS
      emailjs.send(
        'service_y7lxu4e',
        'template_4py9jk6',
        {
          from_name: sanitizedValue.name,
          from_email: sanitizedValue.email,
          subject: sanitizedValue.subject,
          message: sanitizedValue.message,
          to_email: 'daoduvictor48@gmail.com'
        },
        'VmfXady79NRNRaFso'
      )
    ])
      .then(() => {
        this.toastr.success('Your message has been sent!', 'Success');
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch((err: Error) => {
        this.toastr.error('Failed to send message. Please try again.', 'Error');
        console.error('Error:', err);
      });
  }
}
