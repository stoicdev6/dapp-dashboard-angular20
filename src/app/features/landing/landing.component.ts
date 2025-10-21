import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../../core/services/wallet.service';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  private router = inject(Router);
  private walletService = inject(WalletService);

  async navigateToDashboard() {
    await this.walletService.connectWallet();
    this.router.navigate(['/dashboard']);
  }
}
