import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import wheatFormatter from './wheatFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return wheatFormatter(mojo, Unit.MOJO).to(Unit.CAT).toLocaleString(locale);
}
