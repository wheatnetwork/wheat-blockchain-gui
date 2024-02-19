import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import wheatFormatter from './wheatFormatter';

export default function wheatToMojo(wheat: string | number | BigNumber): BigNumber {
  return wheatFormatter(wheat, Unit.WHEAT).to(Unit.MOJO).toBigNumber();
}
