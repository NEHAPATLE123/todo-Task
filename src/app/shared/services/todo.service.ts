import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // api call 
  todoArray : Array<string> =[
    "Angular",
    "Html",
    "css"
  ]

  constructor(private _snackBar : SnackbarService ) { }

  getToDos(){
    return this.todoArray
  }

  addTodoItem(item: string){
    this.todoArray.push(item)
    // snackbar 
    // alert(`${item} is added to The List`)
    this._snackBar.openSnackbar(`${item} is added to Todo List successfully`)
  }

  removeTodoItem(){
    // Item is removed successfully
    // this._snackBar.openSnackbar(`${item} is  List successfully`)
  }
}
