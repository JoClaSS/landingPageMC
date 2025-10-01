import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Analytics } from "@vercel/analytics/next"
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly analytics = inject();
  protected readonly title = signal('landingPage');
}

