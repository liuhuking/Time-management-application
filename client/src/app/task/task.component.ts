import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/tasks/gettasks')
      .subscribe(data => {
        var counter = 0;
        while (data[counter] != null) {
          this.taskList.push(new Task(
              data[counter]["_id"],
              data[counter]["name"],
              data[counter]["date"],
              data[counter]["goal"],
              data[counter]["deliverable"],
              data[counter]["priority"],
              data[counter]["startTime"],
              data[counter]["endTime"],
              data[counter]["reminder"],
              data[counter]["process"]
          ));
          counter++;
        }
    });
  }
}
