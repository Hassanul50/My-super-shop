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



//#region form submit
  onsubmit(){
    console.log(this.regform.value);
    if(this.regform.value.password==this.regform.value.confirm_password){
      console.log("Form submitted successfully");
    } else{
      alert("Password and Confirm Password do not match");
      // this.regform.reset();
      // this.regform.value.confirm_password.reset() ;
       this.regform.controls['confirm_password'].reset();
      
    } 
    

  } 
  //#endregion
}
