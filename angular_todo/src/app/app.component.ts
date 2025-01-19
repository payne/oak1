import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from './todo-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_todo';
}
