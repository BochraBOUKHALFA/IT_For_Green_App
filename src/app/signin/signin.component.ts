import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    onLoginUser() {
      if (this.loginForm.valid) {
        const formData = this.loginForm.value;
        console.log('this is login', this.loginForm.value);
      
        this.http.get('https://sellersapi.onrender.com/connection_user', formData).subscribe(
          (response) => {
            console.log('Sign-in successful', response);
          
          },
          (error) => {
            console.error('Sign-in error', error);
          }
        );
      }
    }
  }