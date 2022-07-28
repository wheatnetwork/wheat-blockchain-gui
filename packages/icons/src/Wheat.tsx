import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import WheatIcon from './images/wheat.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={WheatIcon} viewBox="0 -6 128 128" {...props} />;
}
