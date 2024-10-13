// import { Component } from '@angular/core';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  // styleUrl: './todo-item.component.css'
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: { sno: number; title: string; desc: string; active: boolean };
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: { sno: number; title: string; desc: string; active: boolean; }){
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggerd")
  }

  onClickboxClick(todo: { sno: number; title: string; desc: string; active: boolean; })
  {
    this.todoCheckbox.emit(todo);
    console.log("Checkbox clicked for todo:", todo);
  }
}
