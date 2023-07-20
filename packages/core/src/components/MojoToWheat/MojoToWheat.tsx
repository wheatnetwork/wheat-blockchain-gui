import BigNumber from 'bignumber.js';
import React from 'react';

import useCurrencyCode from '../../hooks/useCurrencyCode';
import mojoToWheat from '../../utils/mojoToWheatLocaleString';
import FormatLargeNumber from '../FormatLargeNumber';

export type MojoToWheatProps = {
  value: number | BigNumber;
};

export default function MojoToWheat(props: MojoToWheatProps) {
  const { value } = props;
  const currencyCode = useCurrencyCode();
  const updatedValue = mojoToWheat(value);

  return (
    <>
      <FormatLargeNumber value={updatedValue} />
      &nbsp;{currencyCode ?? ''}
    </>
  );
}
