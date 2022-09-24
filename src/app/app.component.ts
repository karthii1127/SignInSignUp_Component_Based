import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SigIn_SignUp';
  isSignIn = true;
  ToSignUp(){
    this.isSignIn = false;
  }
  ToSignIn(){
    this.isSignIn = true;
  }   
}
