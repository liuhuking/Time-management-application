import { Component, OnInit } from '@angular/core';

import { User } from '../common/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
