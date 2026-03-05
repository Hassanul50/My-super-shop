import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  logInForm!: FormGroup;
  constructor(private login: FormBuilder) {
    this.myform();
  }
  myform() {
    this.logInForm = this.login.group({
      email: [''],
      password: ['']
    });
  }


  onSubmit() {
    console.log(this.logInForm.value);
  }

}
