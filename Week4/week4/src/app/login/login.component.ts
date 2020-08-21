import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


const Emails =['abc', 'def', 'ghi']
const Passwords =['PW1', 'PW2', 'PW3']

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email="";
  emailValid = false
  password="";
  passwordValid = false


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login(){
    if (Emails.indexOf(this.email))
      this.emailValid = true

    if (Passwords.indexOf(this.password))
      this.passwordValid = true

    if (this.emailValid == true && this.passwordValid == true)
      this.router.navigateByUrl('/account');
    else 
      alert("Credentials incorrect!!! 4Head")
  }
}
