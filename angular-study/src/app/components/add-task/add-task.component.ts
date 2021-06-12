import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../Task"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onSubmitTask = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  init(): void {
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

  onSubmit() {
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onSubmitTask.emit(newTask)

    this.init()
  }
}
