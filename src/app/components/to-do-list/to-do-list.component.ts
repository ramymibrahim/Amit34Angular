import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: ToDo[];
  search: string;
  itemName: string;
  itemDate: Date;
  constructor(private filterPipe: FilterPipe) {

  }

  ngOnInit() {
    this.todos = [
      { id: 1, name: "Call Hamada", dueDate: new Date(2019, 12, 22), isCompleted: true }
      , { id: 2, name: "Buy Tomato", dueDate: new Date(2019, 12, 22), isCompleted: false }
      , { id: 3, name: "Study Physics", dueDate: new Date(2019, 12, 22), isCompleted: true }
    ];
  }

  addItem() {
    if (!this.validate()) {
      alert('Please enter valid data');
      return;
    }
    this.todos.push({
      id: 4, name: this.itemName, dueDate: this.itemDate, isCompleted: false
    });
    this.itemName = '';
    this.itemDate = undefined;
    this.refresh();
  }

  refresh() {
    var oldValue = this.search;
    this.search = '';
    this.todos = this.filterPipe.transform(this.todos, this.search);
    this.search = oldValue;
  }

  delete(id: number) {
    this.todos = this.todos.filter(function (todo) {
      return todo.id != id;
    });
  }

  validate() {
    if (this.itemName == undefined || this.itemName == '')
      return false;
    if (this.itemDate == undefined)
      return false;
    return true;
  }
}
