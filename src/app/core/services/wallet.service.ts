
import { Injectable, signal } from '@angular/core';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.JsonRpcSigner | null = null;

  private address = signal<string | null>(null);
  private chainId = signal<string | null>(null);
  private isMetaMaskInstalled = signal<boolean>(false);

  address$ = this.address.asReadonly();
  chainId$ = this.chainId.asReadonly();
  isMetaMaskInstalled$ = this.isMetaMaskInstalled.asReadonly();

  constructor() {
    this.isMetaMaskInstalled.set(typeof window.ethereum !== 'undefined');
  }

  async connectWallet() {
    if (this.isMetaMaskInstalled$()) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.provider = new ethers.BrowserProvider(window.ethereum);
        this.signer = await this.provider.getSigner();
        const address = await this.signer.getAddress();
        this.address.set(address);
        const network = await this.provider.getNetwork();
        this.chainId.set(network.chainId.toString());

        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          if (accounts.length > 0) {
            this.address.set(accounts[0]);
          } else {
            this.disconnectWallet();
          }
        });

        window.ethereum.on('chainChanged', (chainId: string) => {
          this.chainId.set(parseInt(chainId, 16).toString());
        });
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  }

  disconnectWallet() {
    this.provider = null;
    this.signer = null;
    this.address.set(null);
    this.chainId.set(null);
  }

  get isConnected() {
    return this.address() !== null;
  }
}
