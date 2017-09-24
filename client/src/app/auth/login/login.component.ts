import { Component, OnInit } from '@angular/core';

import { User } from '../common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  submitted = false;

  constructor() { 
    this.user = new User("", "", "");
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
}