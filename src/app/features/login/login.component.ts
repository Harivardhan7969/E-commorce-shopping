import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-seller-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  formBuilder: FormBuilder = inject(FormBuilder);

  errorLogging: boolean = false;
  errorMessage: string = '';

  router: Router = inject(Router);


  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }



  login() {

    // this.router.navigate(["/"])
    if (this.loginForm.invalid) {

      return;
    }

  }

}
