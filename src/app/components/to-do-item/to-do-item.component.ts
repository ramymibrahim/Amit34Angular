import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item: ToDo;
  @Output() delete: EventEmitter<number> = new EventEmitter();  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteItem(id: number) {
    this.todoService.delete(id).subscribe(
      data => {
        this.delete.emit(id);
      },
      error => {
        alert('Error while deleting');
      }
    );
  }

  change(ic) {
    var data={is_completed:ic};
    this.todoService.edit(this.item.id,data).subscribe(
      data=>{
        this.item.is_completed=ic;
      },
      error=>{
        console.log(error);
      }
    );    
  }
}