
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div class="p-4 sm:p-6 lg:p-8">
      <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-bold text-gray-800">Total Assets</h3>
          <p class="text-2xl font-bold text-gray-900 mt-2">$1,234.56</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-bold text-gray-800">Transactions</h3>
          <p class="text-2xl font-bold text-gray-900 mt-2">123</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-bold text-gray-800">Wallet Balance</h3>
          <p class="text-2xl font-bold text-gray-900 mt-2">$5,678.90</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-bold text-gray-800">Gas Price</h3>
          <p class="text-2xl font-bold text-gray-900 mt-2">15 Gwei</p>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {}
