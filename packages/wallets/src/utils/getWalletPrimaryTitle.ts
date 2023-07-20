import { WalletType } from '@wheat-network/api';
import type { Wallet } from '@wheat-network/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Wheat';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
