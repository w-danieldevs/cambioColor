import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cuadrado',
  imports: [],
  standalone: true,
  templateUrl: './cuadrado.html',
  styleUrls: ['./cuadrado.scss'],
})
export class Cuadrado {
  @Input() colorfondo: string = 'transparent';
}
