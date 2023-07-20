import { useGetBlockchainStateQuery } from '@wheat-network/api-react';
import { FormatLargeNumber, CardSimple } from '@wheat-network/core';
import { Trans } from '@lingui/macro';
import React from 'react';

export default function FullNodeCardDifficulty() {
  const { data, isLoading, error } = useGetBlockchainStateQuery();
  const value = data?.difficulty;

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Difficulty</Trans>}
      value={<FormatLargeNumber value={value} />}
      error={error}
    />
  );
}
