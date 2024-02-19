import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import wheatFormatter from './wheatFormatter';

export default function mojoToWheatLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return wheatFormatter(mojo, Unit.MOJO).to(Unit.WHEAT).toLocaleString(locale);
}
