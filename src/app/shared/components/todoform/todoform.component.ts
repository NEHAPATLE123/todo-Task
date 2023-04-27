import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
  }

  onTodoAdd(todo: HTMLInputElement){
    let val = todo.value;
    this._todoService.addTodoItem(val)
    todo.value= "";
  }
}
