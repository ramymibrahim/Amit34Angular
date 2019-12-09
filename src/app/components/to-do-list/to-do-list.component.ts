import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { TodoService } from 'src/app/services/todo.service';
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
  loading: boolean;
  constructor(
    private filterPipe: FilterPipe
    , private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.get().subscribe(
      (data: Array<ToDo>) => {
        this.loading = false;
        this.todos = data;
        console.log(data);
      },
      error => {
        this.loading = false;
        console.log(error);
      });
    this.todos = [];
    this.loading = true;
  }

  addItem() {
    if (!this.validate()) {
      alert('Please enter valid data');
      return;
    }
    var data = { name: this.itemName, due_date: this.itemDate, is_completed: false };
    this.todoService.add(data).subscribe((data: any) => {
      this.todos.push(data.data);
      this.itemName = '';
      this.itemDate = undefined;
      this.refresh();
    },
      error => {
        console.log(error);
      });
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
