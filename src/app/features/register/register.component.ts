import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-seller-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signUpForm!: FormGroup;
  submitted = true;
  passwordMatching: boolean = false;

  errorRegistering: boolean = false;
  errorMessage: string = '';

  router: Router = inject(Router);


  formbuilder: FormBuilder = inject(FormBuilder);
  constructor() {
    this.signUpForm = this.formbuilder.group({


      fullName: ["", [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{3,29}$")]],
      email: ["", [Validators.required, Validators.email], []],
      password: ["", [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')
      ]],
      confirmPassword: ["", [
        Validators.required,

      ]]


    })

    this.signUpForm.controls["password"].valueChanges.subscribe(
      data => {
        if (data === this.signUpForm.value.confirmPassword) {
          this.passwordMatching = true;
        } else {
          this.passwordMatching = false;
        }
      }
    );

    this.signUpForm.controls["confirmPassword"].valueChanges.subscribe(data => {

      console.log(this.signUpForm.value.password);

      if (this.signUpForm.value.password === data) {

        this.passwordMatching = true;
      } else {
        this.passwordMatching = false;
      }
    }
    );
  }



  onSubmit() {
    console.log(this.signUpForm);

  }

  signUp() {

  }

}
