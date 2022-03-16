import type { Wallet } from '@wheat/api';
import { WalletType } from '@wheat/api';
import { mojoToCATLocaleString, mojoToWheatLocaleString } from '@wheat/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToWheatLocaleString(value);
}
