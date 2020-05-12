import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TodoListService } from './../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	current_todo_list;
	medium;
	paramsSubscription;
	status;

	constructor(private todo_list: TodoListService, private activatedRouter: ActivatedRoute) {
		this.paramsSubscription = this.activatedRouter.params.subscribe(param => {
			this.medium = param['done'];
			this.status = param['done'] == 'completed'? 'completed': param['done'] == 'notcompleted'? 'pending': 'todo';
			this.current_todo_list = this.todo_list.get(this.medium);
		});
	}

	ngOnInit() {
	}

	deleteItem(id) {
		this.todo_list.delete(id);
		this.current_todo_list = this.current_todo_list.filter(item => item.id != id);
	}

	completeItem(id) {
		this.todo_list.complete(id);
	}
}
