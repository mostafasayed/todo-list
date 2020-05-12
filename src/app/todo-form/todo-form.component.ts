import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from './../todo-list.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  test = 'Testing';
  myForm;
  constructor(private router: Router, private todo_list: TodoListService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      description: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    })
  }

  onSubmit(form) {
    console.log(form);
    let type = ''
    if (form.state == 'Completed') {
      type = 'completed'
    } else {
      type = 'notcompleted'
    }
    this.todo_list.add(form);
    this.router.navigate(["/item", type]);
  }

}
