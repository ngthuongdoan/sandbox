import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes, fas } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() updateReminder = new EventEmitter();

  faTimes = faTimes;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faTimes);
  }
  ngOnInit(): void {}
  onDelete(task: Task): void {
    this.deleteTask.emit(task);
  }

  toggleReminder():void{
    this.updateReminder.emit(this.task)
  }
}
