import { useGetFarmedAmountQuery } from '@wheat-network/api-react';
import { useCurrencyCode, mojoToWheatLocaleString, CardSimple, useLocale } from '@wheat-network/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardUserFees() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const feeAmount = data?.feeAmount;

  const userTransactionFees = useMemo(() => {
    if (feeAmount !== undefined) {
      return (
        <>
          {mojoToWheatLocaleString(feeAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
    return undefined;
  }, [feeAmount, locale, currencyCode]);

  return (
    <CardSimple
      title={<Trans>User Transaction Fees</Trans>}
      value={userTransactionFees}
      loading={isLoading}
      error={error}
    />
  );
}
