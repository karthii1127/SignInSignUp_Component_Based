import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSignIn = true;
  ToSignUp(){
    this.isSignIn = false;
  }
  ToSignIn(){
    this.isSignIn = true;
  }   
  Password_Type = "password"
  Eye(){
    if(this.Password_Type === 'password'){
      this.Password_Type = 'text';
    }
    else if(this.Password_Type === 'text'){
    this.Password_Type = 'password';
    }
  }

}
