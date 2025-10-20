import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AssetsComponent } from './features/assets/assets.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'transactions', component: TransactionsComponent },
];