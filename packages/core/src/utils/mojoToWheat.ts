import Big from 'big.js';
import Unit from '../constants/Unit';
import wheatFormatter from './wheatFormatter';

export default function mojoToWheat(mojo: string | number | Big): number {
  return wheatFormatter(mojo, Unit.MOJO)
    .to(Unit.WHEAT)
    .toNumber();
}
