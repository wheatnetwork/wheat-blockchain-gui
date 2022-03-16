import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToWheatLocaleString, CardSimple } from '@wheat/core';
import { useGetFarmedAmountQuery } from '@wheat/api-react';

export default function FarmCardTotalWheatFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalWheatFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToWheatLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Wheat Farmed</Trans>}
      value={totalWheatFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
