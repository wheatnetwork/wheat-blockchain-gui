import type { Wallet } from '@wheat-network/api';
import { WalletType } from '@wheat-network/api';
import { useMemo } from 'react';

import { useGetWalletsQuery } from '../services';

export default function useGetNFTWallets() {
  const { data, isLoading, error } = useGetWalletsQuery();
  const nftWallets = useMemo(() => {
    if (!data || isLoading) {
      return [];
    }

    return data.filter((wallet: Wallet) => wallet.type === WalletType.NFT);
  }, [data, isLoading]);

  return { wallets: nftWallets, isLoading, error };
}
