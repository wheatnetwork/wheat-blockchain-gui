import React from 'react';
import { Trans } from '@lingui/macro';
import { CardSimple } from '@wheat/core';
import { ServiceName } from '@wheat/api';
import { useIsServiceRunningQuery } from '@wheat/api-react';

export default function FullNodeCardConnectionStatus() {
  const { data: isRunning, isLoading, error } = useIsServiceRunningQuery({
    service: ServiceName.FULL_NODE,
  }, {
    pollingInterval: 1000,
  });

  return (
    <CardSimple
      loading={isLoading}
      valueColor={isRunning ? 'primary' : 'textPrimary'}
      title={<Trans>Connection Status</Trans>}
      value={
        isRunning ? <Trans>Connected</Trans> : <Trans>Not connected</Trans>
      }
      error={error}
    />
  );
}
