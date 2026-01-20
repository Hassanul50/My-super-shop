import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  regform !:FormGroup;
  constructor(private registrationform:FormBuilder) {
   this.myform(); 
    
  }
  myform(){
     this.regform=this.registrationform.group({
    name:[''],
    email:[''],
    password:[''],
    confirm_password:[''],
    mobile:['']
   });         

  }

}
