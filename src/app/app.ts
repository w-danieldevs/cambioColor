import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cuadrado } from './cuadrado/cuadrado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cuadrado],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('mi');
  coloractual = signal('Red');

  actualizarcolor(color: string) {
    this.coloractual.set(color);
  }
}
