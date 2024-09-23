import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  srcLogos: string[] = ['planday.svg', 'umbraco.svg', 'pearlfisher.svg', 'brightpearl.svg', 'planday.svg'];
  constructor() {

  }
  title = 'landing-page-web-services';
}
