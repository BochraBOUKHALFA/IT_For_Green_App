import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // isSubmitted  =  false;
  registerForm!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstNameControl: ['', Validators.required],
      lastNameControl: ['', Validators.required],
      emailControl: ['', Validators.required],
      phoneControl: ['', Validators.required],
      loginControl: ['', Validators.required],
      passwordControl: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onRegisterParent(){
    const userData:Object = {
      "login": this.registerForm.value.loginControl,
      "firstName": this.registerForm.value.firstNameControl,
      "lastName": this.registerForm.value.lastNameControl,
      "email": this.registerForm.value.emailControl,
      "phoneNumber": this.registerForm.value.phoneControl,
      "password": this.registerForm.value.passwordControl
    }
  }
  onRegisterAccompanist(){
    const userData:Object = {
      "login": this.registerForm.value.loginControl,
      "firstName": this.registerForm.value.firstNameControl,
      "lastName": this.registerForm.value.lastNameControl,
      "email": this.registerForm.value.emailControl,
      "password": this.registerForm.value.passwordControl,
      "phoneNumber": this.registerForm.value.phoneControl,
      "profileImage": ' '
    }
  }

}