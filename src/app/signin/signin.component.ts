import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
  errorOccurred: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    onLoginUser() {
      if (this.loginForm.valid) {
        const formData = this.loginForm.value;  
        console.log("this is it")    
        this.http.post('https://sellersapi.onrender.com/connection_user', formData, { observe: 'response' }).subscribe(
        (response: HttpResponse<any>) => {
       if (response.body.code === 200) {
        console.log('Sign-in successful', response);
        this.router.navigate(['/maps']);
    } else {
      console.log('Sign-in response is not 200, do something else');
    }
  },
  (error) => {
  console.log("something is wrong")
  }
);
      }
    }
  }