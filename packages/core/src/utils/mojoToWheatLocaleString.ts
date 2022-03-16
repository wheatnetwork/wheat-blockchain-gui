import Big from 'big.js';
import Unit from '../constants/Unit';
import wheatFormatter from './wheatFormatter';

export default function mojoToWheatLocaleString(mojo: string | number | Big) {
  return wheatFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.WHEAT)
    .toLocaleString();
}
