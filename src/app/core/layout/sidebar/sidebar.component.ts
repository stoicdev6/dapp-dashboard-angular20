
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../core/services/layout.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent {
  private layoutService = inject(LayoutService);
  private router = inject(Router);
  isSidebarOpen = this.layoutService.isSidebarOpen;

  closeSidebar() {
    this.layoutService.closeSidebar();
  }

  logout() {
    this.closeSidebar();
    this.router.navigate(['/']);
  }

  get slideState() {
    return this.isSidebarOpen() ? 'in' : 'out';
  }
}
