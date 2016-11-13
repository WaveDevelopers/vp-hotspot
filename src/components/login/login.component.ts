import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.less']
})
export class LoginComponent {

  constructor(private router: Router) {}

  signIn() {
    alert("Signing in!");
  }

}
