import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'hp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {
    this.signupForm = this.createSignUpFormGroup();
  }

  ngOnInit(): void {
  }
  matcher = new MyErrorStateMatcher();
  createSignUpFormGroup() {
    return new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [Validators.required])
    });
  }

  signup() {
    console.log(this.signupForm);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}