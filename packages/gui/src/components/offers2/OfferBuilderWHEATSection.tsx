import { Loading, wheatToMojo, mojoToWheatLocaleString, useCurrencyCode } from '@wheat-network/core';
import { Farming } from '@wheat-network/icons';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

import useOfferBuilderContext from '../../hooks/useOfferBuilderContext';
import useStandardWallet from '../../hooks/useStandardWallet';

import OfferBuilderSection from './OfferBuilderSection';
import OfferBuilderWalletAmount from './OfferBuilderWalletAmount';

export type OfferBuilderWHEATSectionProps = {
  name: string;
  offering?: boolean;
  muted?: boolean;
};

export default function OfferBuilderWHEATSection(props: OfferBuilderWHEATSectionProps) {
  const { name, offering, muted = false } = props;
  const { wallet, loading: isLoadingWallet } = useStandardWallet();
  const currencyCode = useCurrencyCode();
  const { fields, append, remove } = useFieldArray({
    name,
  });
  const amount =
    useWatch({
      name,
    })?.[0]?.amount ?? 0; // Assume there's only 1 WHEAT field per trade side
  const { requestedRoyalties, offeredRoyalties, isCalculatingRoyalties } = useOfferBuilderContext();

  // Yes, this is correct. Fungible (WHEAT) assets used to pay royalties are from the opposite side of the trade.
  const allRoyalties = offering ? requestedRoyalties : offeredRoyalties;

  const loading = isLoadingWallet || isCalculatingRoyalties;

  const [amountWithRoyalties, royaltyPayments] = useMemo(() => {
    if (!allRoyalties) {
      return [];
    }

    let amountWithRoyaltiesLocal = wheatToMojo(amount);
    const rows: Record<string, any>[] = [];
    Object.entries(allRoyalties).forEach(([nftId, royaltyPaymentsLocal]) => {
      const matchingPayment = royaltyPaymentsLocal?.find((payment) => payment.asset === 'wheat');
      if (matchingPayment) {
        amountWithRoyaltiesLocal = amountWithRoyaltiesLocal.plus(matchingPayment.amount);
        rows.push({
          nftId,
          payment: {
            ...matchingPayment,
            displayAmount: mojoToWheatLocaleString(matchingPayment.amount),
          },
        });
      }
    });

    return [mojoToWheatLocaleString(amountWithRoyaltiesLocal), rows];
  }, [allRoyalties, amount]);

  function handleAdd() {
    if (!fields.length) {
      append({
        amount: '',
      });
    }
  }

  function handleRemove(index: number) {
    remove(index);
  }

  return (
    <OfferBuilderSection
      icon={<Farming color="info" />}
      title={currencyCode}
      subtitle={<Trans>Wheat ({currencyCode}) is a digital currency that is secure and sustainable</Trans>}
      onAdd={!fields.length ? handleAdd : undefined}
      expanded={!!fields.length}
      muted={muted}
    >
      {loading ? (
        <Loading />
      ) : (
        fields.map((field, index) => (
          <OfferBuilderWalletAmount
            key={field.id}
            walletId={wallet.id}
            name={`${name}.${index}.amount`}
            onRemove={() => handleRemove(index)}
            hideBalance={!offering}
            amountWithRoyalties={amountWithRoyalties}
            royaltyPayments={royaltyPayments}
          />
        ))
      )}
    </OfferBuilderSection>
  );
}
