import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Wheat Proof of Space',
  options: optionsForPlotter(PlotterName.WHEATPOS),
  defaults: defaultsForPlotter(PlotterName.WHEATPOS),
  installInfo: { installed: true },
};
