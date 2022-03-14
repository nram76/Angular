import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
      <div class="container">
        <h1 class="title"> Contact Me! </h1>
      </div>
      </div>
    </section>


    <section class="section">
      <div class="container">

      {{ name }}

      <!-- contact form -->
      <form 
      action="https://formsubmit.com/nramanjulu97@gmail.com"
      method="POST"
      (ngSubmit)="submitForm()" #contactForm="ngForm">
        <!-- name -->
        <div class="field">
            <label class="label">Name</label>
            <input
             type="text" 
             name="name" 
             class="input" 
             [(ngModel)]="name"
             #nameInput="ngModel" 
             required>
             
             <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
               Your name is required.
             </div>
        </div>

        <!-- email -->
        <div class="field">
            <label class="label">Email @</label>
            <input
            type="email" 
            name="email" 
            class="input" 
            [(ngModel)]="email"
            #emailInput="ngModel"
            required
            email>

            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required and needs to be a valid email.
            </div>
        </div>

        <!-- message -->
        <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message"class="textarea" [(ngModel)]="message"></textarea>
        </div>

        <!-- submit button -->
        <div class="field">
            <button 
            type="submit" 
            class="button is-success"
            [disabled]="contactForm.invalid">
            Submit
          </button>
        </div>


      </form>


      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(){}

  submitForm() {
    const message = "Email Delivered!";
    /* grab all the fields and their values*/
    alert(message);

  }

}
