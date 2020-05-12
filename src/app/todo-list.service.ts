import { Injectable } from '@angular/core';

interface TodoList {
	id: number;
	description: string;
	state: string;
	date: Date;
	done: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class TodoListService {
	private todo_item = [];

	get(medium) {
		if (!medium) {
			return this.todo_item;
		} else {
			let done = medium == 'completed'? true: false
			return this.todo_item.filter(item => item.done == done)
		}
	}

  	add(todo) {
		let id = 1
		if (this.todo_item.length >= 1) {
			id = this.todo_item[this.todo_item.length-1].id + 1
		}
		this.todo_item.push({
			description: todo.description,
			state: todo.state,
			date: todo.date,
			done: todo.state == 'Completed',
			id: id,
		})
	}
	
	delete(id) {
		var item = this.todo_item.find(item => item.id == id)
		var itemIndex = this.todo_item.indexOf(item)
		if (itemIndex >= 0) {
			this.todo_item.splice(itemIndex, 1);
		}
		this.todo_item = this.todo_item.filter(item => item.id != id);
	}

	complete(id) {
		var item = this.todo_item.find(item => item.id == id)
		var itemIndex = this.todo_item.indexOf(item)
		if (itemIndex >= 0) {
			this.todo_item[itemIndex].state = 'Completed';
			this.todo_item[itemIndex].done = true;
		}
	}
}
