import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // isSubmitted  =  false;
  registerForm!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,public http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      FirstName: ['', Validators.required],
      Email: ['', Validators.required],
      TelNumber: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onRegisterParent(){
    console.log("ca marche!")
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log("data!", this.registerForm.value);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', // Adjust based on your data type
      });
      this.http.post('https://sellersapi.onrender.com/createUser', formData, { headers }).subscribe(
        (response) => {
          // Handle a successful registration response, e.g., show a success message.
          console.log('Registration successful', response);
        },
        (error) => {
          // Handle registration errors, e.g., show an error message.
          console.error('Registration error', error);
        }
      );
    }
  }
  }
