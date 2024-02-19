import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';

import PlotterName from './PlotterName';

export default {
  displayName: 'Wheat Proof of Space',
  options: optionsForPlotter(PlotterName.WHEATPOS),
  defaults: defaultsForPlotter(PlotterName.WHEATPOS),
  installInfo: { installed: true },
};
