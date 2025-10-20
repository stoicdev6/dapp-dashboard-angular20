
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  template: `
    <div class="p-4 sm:p-6 lg:p-8">
      <h2 class="text-2xl font-bold text-gray-800">Transactions</h2>
      <div class="mt-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-bold text-gray-800">Transaction 1</h3>
          <p class="text-gray-600">This is a description of transaction 1.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow mt-4">
          <h3 class="text-lg font-bold text-gray-800">Transaction 2</h3>
          <p class="text-gray-600">This is a description of transaction 2.</p>
        </div>
      </div>
    </div>
  `,
})
export class TransactionsComponent {}
