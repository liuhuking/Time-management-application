import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  token : String;

  constructor(){
    if(localStorage.getItem('mean-token')){
      this.token = localStorage.getItem('mean-token');
    }
  }
}
