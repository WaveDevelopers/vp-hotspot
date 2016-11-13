import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthVerification} from '../../services/auth-verification';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.less']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthVerification) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      key: ''
    });
  }

  signIn() {
    console.log(this.loginForm.value);
    alert(this.auth.isValid(this.loginForm.value.key));
  }

}
