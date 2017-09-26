import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import * as moment from 'moment';

import { Task } from './task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  model: Task;
  option = 'Add';
  id = this.route.snapshot.paramMap.get('id');

  // Refer for Angular lifecycle: https://angular.io/guide/lifecycle-hooks
  // Initialize model with values
  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private location: Location,
      private router: Router
  ) {
      this.model = new Task("","", "", "", "", 1, "", "", "", []);
  }

  // Makes get request to the server and populate tasks
ngOnInit(): void {
    if (this.id !== '0') {
        this.http.get('http://localhost:3000/tasks/gettask/' + this.id)
        .subscribe(data => {
            let counter = 0;

            if (data != null) {
                this.model = new Task(
                    data["_id"],
                    data["name"],
                    moment(data["date"]).format('DD/MM/YYYY'),
                    data["goal"],
                    data["deliverable"],
                    data["priority"],
                    moment(data["startTime"]).format('H:mm'),
                    moment(data["endTime"]).format('H:mm'),
                    data["reminder"],
                    data["process"]
                );
                counter++;
            }

            if (counter !== 0) {
                this.option = 'Edit';
            }
        });
    }
}

  // Process submitted form
  onSubmit() {
      
    if (this.id !== '0') {
        this.http.put('http://localhost:3000/tasks/edit', {
            "_id": this.id,
            "name": this.model.name,
            "date": this.model.date,
            "goal": this.model.goal,
            "deliverable": this.model.deliverable,
            "priority": this.model.priority,
            "startTime": this.model.startTime,
            "endTime": this.model.endTime,
            "reminder": this.model.reminder,
            "process": this.model.process
        })
        .subscribe(data => {
            var counter = 0;

            if (data != null) {
                this.router.navigate(['task']);
            }
        });
    } else {
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
        })
        .subscribe(data => { this.router.navigate(['task']); });
    }






      
  }
}
