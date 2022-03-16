import Big from 'big.js';
import Unit from '../constants/Unit';
import wheatFormatter from './wheatFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return wheatFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}
