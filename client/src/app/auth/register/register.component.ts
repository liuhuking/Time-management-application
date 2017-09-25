import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../common/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  message: String;
  submitted = false;

  constructor(private http : HttpClient, private router : Router) { 
    this.user = new User("", "", "");
    this.message = "";
  }

  ngOnInit() {
  }
  
  onSubmit() {
    this.http.post('http://localhost:3000/users/register', this.user).subscribe(data => {
      if (data['token']) {
        localStorage.setItem('mean-token', data['token']);
        location.reload();
        this.router.navigate(['/']);
      }
      if (data['message']){
        this.message = data['message'];
      }
    });
    
  }
}
