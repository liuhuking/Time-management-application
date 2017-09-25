import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Task } from './task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  model: Task;
  option = 'Add';

  // Refer for Angular lifecycle: https://angular.io/guide/lifecycle-hooks
  // Initialize model with values
  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private location: Location
  ) {
      this.model = new Task("","", new Date(), "", "", 1, new Date(), new Date(), "", []);
  }

  // Makes get request to the server and populate tasks
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
    //   if (id) {
    //     this.http.get('http://localhost:3000/tasks/gettask/:' + id)
    //     .subscribe(data => {
    //       var counter = 0;
    //       this.taskList = [];
    //       while (data[counter] != null) {
    //         this.taskList.push(new Task(
    //             data[counter]["_id"],
    //             data[counter]["name"],
    //             data[counter]["date"],
    //             data[counter]["goal"],
    //             data[counter]["deliverable"],
    //             data[counter]["priority"],
    //             data[counter]["startTime"],
    //             data[counter]["endTime"],
    //             data[counter]["reminder"],
    //             data[counter]["process"]
    //         ));
    //         counter++;
    //       }

    //       if (counter !== 0) {
    //         this.option = 'Edit';
    //       }
    //   });
    //   }
    //   const id = this.route.snapshot.paramMap.get('id');

    //   if (id) {
    //       this.option = 'Edit';
        //   this.http.get('http://localhost:3000/api/task/edit/' + id).subscribe(data => {
        //       this.model = new Task(data[0]['taskId'],
        //           data[0]['name'],
        //           data[0]['date'],
        //           data[0]['goal'],
        //           data[0]['deliverable'],
        //           data[0]['priority'],
        //           data[0]['startTime'],
        //           data[0]['endTime'],
        //           data[0]['reminder'],
        //           data[0]['process']
        //       )
        //   });
    //   }
  }

  // Process submitted form
  onSubmit() {
      this.http.post('http://localhost:3000/tasks/add', {
          "name": this.model.name,
          "date": this.model.date,
          "goal": this.model.goal,
          "deliverable": this.model.deliverable,
          "priority": this.model.priority,
          "startTime": this.model.startTime,
          "endTime": this.model.endTime,
          "reminder": this.model.reminder,
          "process": this.model.process
      }).subscribe(data => { });
  }
}
