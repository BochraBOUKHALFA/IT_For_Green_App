import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninComponentModal implements OnInit {
  email: string = '';
  password: string = '';

  token!: Object;
  isSubmitted  =  false;
  test!: string | null;

  loginForm: FormGroup = new FormGroup({
    loginForm: new FormControl({value:'',disabled:false}),
  });

  constructor(
    private router: Router, private formBuilder: FormBuilder,
             ) { }
    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  async onLoginUser(){
   
      // Replace this with your actual sign-in logic
      if (this.email === 'user@example.com' && this.password === 'password') {
        alert('Sign-in successful');
      } else {
        alert('Sign-in failed');
      }
    

  }

  

}