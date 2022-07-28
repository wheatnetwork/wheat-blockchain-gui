import { WalletType } from '@wheat/api';
import type { Wallet } from '@wheat/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Wheat';
    default:
      return wallet.name;
  }
}
