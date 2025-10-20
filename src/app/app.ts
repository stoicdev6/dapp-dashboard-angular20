import { Component, signal } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header.component';
import { MainContentComponent } from './core/layout/main-content/main-content.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, MainContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dapp-dashboard');
}
