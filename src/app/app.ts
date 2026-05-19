import { Component, signal } from '@angular/core';
import { Cuadrado } from './cuadrado/cuadrado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cuadrado],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('');
  coloractual = signal('white');

   nombredelcolor() {

    if (this.coloractual() == 'white') {
      return 'blanco';
    }

    if (this.coloractual() == 'Red') {
      return 'rojo';
    }

    if (this.coloractual() == 'Blue') {
      return 'azul';
    }

    if (this.coloractual() == 'Yellow') {
      return 'amarillo';
    }

    if (this.coloractual() == 'Green') {
      return 'verde';
    }

    return this.coloractual();
  }


  actualizarcolor(color: string) {
    this.coloractual.set(color);
  }
}

