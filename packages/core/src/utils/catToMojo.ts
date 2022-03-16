import Big from 'big.js';
import Unit from '../constants/Unit';
import wheatFormatter from './wheatFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return wheatFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}
