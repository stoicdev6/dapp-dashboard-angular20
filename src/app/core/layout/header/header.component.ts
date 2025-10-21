
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { WalletService } from '../../../core/services/wallet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private layoutService = inject(LayoutService);
  walletService = inject(WalletService);

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

  connectWallet() {
    this.walletService.connectWallet();
  }

  disconnectWallet() {
    this.walletService.disconnectWallet();
  }
}
