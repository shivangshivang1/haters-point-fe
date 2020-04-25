import { UserService } from './../../services/user.service';
import { User } from './../../models/User.model';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;

  success: boolean;
  error: boolean;
  constructor(private userService: UserService, private router : Router) {
    this.signupForm = this.createSignUpFormGroup();
  }

  ngOnInit(): void {}
  matcher = new MyErrorStateMatcher();
  createSignUpFormGroup() {
    return new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [Validators.required]),
    });
  }

  signup() {
    this.success = false;
    this.error = false;
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.user = {
        emailId: this.signupForm.value.emailFormControl,
        password: this.signupForm.value.passwordFormControl,
      };
      this.userService.signUp(this.user).subscribe((result) => {
        if (result === 200) {
          this.success = true;
        } else {
          this.error = true;
        }
      });
    } else {
      alert('there are some errors in the form');
    }
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
