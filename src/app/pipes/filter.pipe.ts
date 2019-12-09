import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/to-do';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todoArray: ToDo[], searchText: string): ToDo[] {
    return todoArray.filter(function (todo) {      
      return searchText == undefined || todo.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });

  }
}
