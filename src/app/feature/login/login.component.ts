import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  userNameError: boolean;
  passwordError: boolean;
  userNameErrorMsg: string;
  passwordErrorMsg: string;
  buttonText: string = 'login';

  constructor() {}

  ngOnInit(): void {
  }

  login() {

    this.resetErrorMessages();
    if (this.userName === null || this.userName === ''|| this.userName === undefined) {
      this.userNameErrorMsg = 'user name is required';
      this.userNameError = true;  
    }

    if (this.password === null || this.password === '' || this.password === undefined) {
      this.passwordErrorMsg = 'password is required';
      this.passwordError = true;
    }
  }

  resetErrorMessages(){
    this.userNameError = false;
    this.passwordError = false;
  }
}
