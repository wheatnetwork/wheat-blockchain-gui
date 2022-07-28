import type BigNumber from 'bignumber.js';
import { type WalletType } from '@wheat/api';

type OfferRowData = {
  amount: string;
  assetWalletId: number; // 0 if no selection made
  walletType: WalletType;
};

export default OfferRowData;