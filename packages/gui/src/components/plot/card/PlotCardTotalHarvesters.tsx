import { useGetTotalHarvestersSummaryQuery } from '@wheat-network/api-react';
import { FormatLargeNumber, CardSimple } from '@wheat-network/core';
import { Trans } from '@lingui/macro';
import React from 'react';

export default function PlotCardTotalHarvesters() {
  const { harvesters, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Total Harvesters</Trans>}
      value={<FormatLargeNumber value={harvesters} />}
      loading={isLoading}
    />
  );
}
