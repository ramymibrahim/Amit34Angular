import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: ToDo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      { id: 1, name: "Call Hamada", dueDate: new Date(2019, 12, 22) }
      ,{ id: 2, name: "Buy Tomato", dueDate: new Date(2019, 12, 22) }
      , { id: 3, name: "Study Physics", dueDate: new Date(2019, 12, 22) }
    ];
  }

}
