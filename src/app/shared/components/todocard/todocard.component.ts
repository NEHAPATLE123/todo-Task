import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
  todoArray : Array<string> = [];
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
   console.log(this._todoService.getToDos());
   this.todoArray = this._todoService.getToDos()
  }

}
