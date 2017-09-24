import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  submitted = false;

  constructor(private http: HttpClient) { 
    this.user = new User("", "", "");
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.http.post('http://localhost:3000/users/login', this.user).subscribe(data => {
      
    });
  }
}