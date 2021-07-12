import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as WheatIcon } from './images/wheat.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={WheatIcon} viewBox="0 -6 128 128" {...props} />;
}
