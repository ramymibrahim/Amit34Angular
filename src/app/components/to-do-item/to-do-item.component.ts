import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item:ToDo;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteItem(id:number){  
    this.delete.emit(id);
  }
}
