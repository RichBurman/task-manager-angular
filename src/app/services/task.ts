import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
        {
      id: 1,
      title: 'Task 1',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Task 2',
      completed: true,
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'Task 3',
      completed: false,
      createdAt: new Date()
    }
  ]);

}

