
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private layoutService = inject(LayoutService);

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
