import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',   
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // isSubmitted  =  false;

  ngOnInit(): void {
      
  }
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      lastNameControl: ['', Validators.required],
      firstNameControl: ['', Validators.required],
      loginControl: ['', Validators.required],
      passwordControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.email]],
      phoneControl: ['']
    });
  }

  onRegisterParent() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
  
      this.http.post('YOUR_API_ENDPOINT', formData).subscribe(
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