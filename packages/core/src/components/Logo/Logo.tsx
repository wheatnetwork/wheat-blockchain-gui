import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { Wheat } from '@wheat/icons';

const StyledWheat = styled(Wheat)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledWheat />
    </Box>
  );
}
