import type { Wallet } from '@wheat-network/api';
import { WalletType } from '@wheat-network/api';
import { useGetCatListQuery } from '@wheat-network/api-react';
import { Tooltip } from '@wheat-network/core';
import { Trans } from '@lingui/macro';
import { VerifiedUser as VerifiedUserIcon, VerifiedUserProps } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const StyledSmallBadge = styled(VerifiedUserIcon)`
  font-size: 1rem;
`;

type Props = VerifiedUserProps & {
  wallet: Wallet;
};

export default function WalletBadge(props: Props) {
  const { wallet, tooltip, ...rest } = props;
  const { data: catList = [], isLoading } = useGetCatListQuery();

  if (!isLoading && [WalletType.CAT, WalletType.CRCAT].includes(wallet.type)) {
    const token = catList.find((tokenItem) => tokenItem.assetId === wallet.meta?.assetId);
    if (token) {
      return (
        <Tooltip title={<Trans>This access token is verified</Trans>}>
          <StyledSmallBadge {...rest} />
        </Tooltip>
      );
    }
  }

  return null;
}
