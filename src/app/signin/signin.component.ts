import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
