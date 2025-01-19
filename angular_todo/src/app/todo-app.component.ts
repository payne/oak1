// todo-app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <div class="todo-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Todo List</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="add-todo">
            <mat-form-field>
              <input matInput
                     [(ngModel)]="newTodoTitle"
                     placeholder="Add new todo"
                     (keyup.enter)="addTodo()">
            </mat-form-field>
            <button mat-raised-button
                    color="primary"
                    (click)="addTodo()">
              Add
            </button>
          </div>

          <div class="todo-list">
            <div *ngFor="let todo of todos" class="todo-item">
              <mat-checkbox
                [(ngModel)]="todo.completed"
                (change)="updateTodo(todo)">
                <span [class.completed]="todo.completed">
                  {{ todo.title }}
                </span>
              </mat-checkbox>
              <button mat-icon-button
                      color="warn"
                      (click)="deleteTodo(todo.id!)">
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (error) => {
        this.showError('Failed to load todos');
      }
    });
  }

  addTodo(): void {
    if (!this.newTodoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.newTodoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo).subscribe({
      next: (todo) => {
        this.todos.push(todo);
        this.newTodoTitle = '';
        this.showSuccess('Todo added successfully');
      },
      error: (error) => {
        this.showError('Failed to add todo');
      }
    });
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe({
      next: () => {
        this.showSuccess('Todo updated successfully');
      },
      error: (error) => {
        this.showError('Failed to update todo');
      }
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.showSuccess('Todo deleted successfully');
      },
      error: (error) => {
        this.showError('Failed to delete todo');
      }
    });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}



