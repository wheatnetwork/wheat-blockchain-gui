import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import WheatBlackIcon from './images/wheat-black.svg';
import WheatIcon from './images/wheat.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={WheatIcon} viewBox="0 -6 128 128" {...props} />;
}

export function WheatBlack(props: SvgIconProps) {
  return <SvgIcon component={WheatBlackIcon} viewBox="0 -6 128 128" sx={{ width: '100px', height: '39px' }} {...props} />;
}
