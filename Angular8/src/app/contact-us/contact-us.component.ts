import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  {
  title = 'contactForm';
  contactFormGroup : FormGroup;
  constructor(public contactFormBuilder:FormBuilder, public contactFormService:ContactFormService){
      this.contactFormGroup = contactFormBuilder.group({
        'contactName' : [null, Validators.required],  
        'contactMobile' : [null, Validators.required],  
        'contactDesciption' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
        'contactEmail':[null, Validators.compose([Validators.required,Validators.email])]
      });
  }

  submitContactForm(form:NgForm){
    //this.contactFormService.postReq(form).toPromise().then(data => {console.log(data);} );
    this.contactFormService.postReq(form).subscribe(data => console.log("data"));
  }

}
