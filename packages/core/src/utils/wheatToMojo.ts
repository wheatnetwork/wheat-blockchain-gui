import Big from 'big.js';
import Unit from '../constants/Unit';
import wheatFormatter from './wheatFormatter';

export default function wheatToMojo(wheat: string | number | Big): number {
  return wheatFormatter(wheat, Unit.WHEAT)
    .to(Unit.MOJO)
    .toNumber();
}
