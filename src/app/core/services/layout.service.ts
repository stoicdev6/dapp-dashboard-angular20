
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private sidebarOpen = signal(false);

  isSidebarOpen = this.sidebarOpen.asReadonly();

  toggleSidebar() {
    this.sidebarOpen.update(value => !value);
  }

  closeSidebar() {
    this.sidebarOpen.set(false);
  }
}
