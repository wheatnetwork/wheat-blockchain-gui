import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import wheatFormatter from './wheatFormatter';

export default function mojoToCAT(mojo: string | number | BigNumber): BigNumber {
  return wheatFormatter(mojo, Unit.MOJO).to(Unit.CAT).toBigNumber();
}
