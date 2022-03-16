import { useMemo } from 'react';
import { useGetWalletsQuery, useGetCatListQuery } from '@wheat/api-react';
import { WalletType } from '@wheat/api';
import type { Wallet } from '@wheat/api';
import { useCurrencyCode } from '@wheat/core';

export default function useWallet(walletId: number): {
  loading: boolean;
  wallet?: Wallet;
  unit?: string;
} {
  const currencyCode = useCurrencyCode();
  const { data: wallets, isLoading } = useGetWalletsQuery();
  const { data: catList = [], isLoading: isCatListLoading } = useGetCatListQuery();

  const wallet = useMemo(() => {
    return wallets?.find((item) => item.id === walletId);
  }, [wallets, walletId]);

  const unit = useMemo(() => {
    if (wallet) {
      if (!isCatListLoading && wallet.type === WalletType.CAT) {
        const token = catList.find((item) => item.assetId === wallet.meta?.assetId);
        if (token) {
          return token.symbol;
        }

        return undefined;
      }

      return currencyCode;
    }
  }, [wallet, currencyCode, isCatListLoading]);

  return {
    wallet,
    loading: isLoading,
    unit,
  };
}
