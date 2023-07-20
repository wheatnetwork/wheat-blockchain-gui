import { OfferSummaryRecord } from '@wheat-network/api';
import { mojoToCAT, mojoToWheat } from '@wheat-network/core';
import BigNumber from 'bignumber.js';

import type OfferBuilderData from '../@types/OfferBuilderData';
import type OfferSummary from '../@types/OfferSummary';
import { launcherIdToNFTId } from './nfts';

export default function offerToOfferBuilderData(
  offerSummary: OfferSummary | OfferSummaryRecord,
  setDefaultOfferedFee?: boolean,
  defaultFee?: string // in mojos
): OfferBuilderData {
  const { fees, offered, requested, infos } = offerSummary;

  const defaultFeeWHEAT = defaultFee ? mojoToWheat(defaultFee).toFixed() : '';

  const offeredWheat: OfferBuilderData['offered']['wheat'] = [];
  const offeredTokens: OfferBuilderData['offered']['tokens'] = [];
  const offeredNfts: OfferBuilderData['offered']['nfts'] = [];
  const offeredFee: OfferBuilderData['offered']['fee'] = setDefaultOfferedFee ? [{ amount: defaultFeeWHEAT }] : [];
  const requestedWheat: OfferBuilderData['requested']['wheat'] = [];
  const requestedTokens: OfferBuilderData['requested']['tokens'] = [];
  const requestedNfts: OfferBuilderData['requested']['nfts'] = [];

  // processing requested first because it's what you/we will give

  Object.keys(requested).forEach((id) => {
    const amount = new BigNumber(requested[id]);
    const info = infos[id];

    if (info?.type === 'CAT') {
      offeredTokens.push({
        amount: mojoToCAT(amount).toFixed(),
        assetId: id,
      });
    } else if (info?.type === 'singleton') {
      offeredNfts.push({
        nftId: launcherIdToNFTId(info.launcherId),
      });
    } else if (id === 'wheat') {
      offeredWheat.push({
        amount: mojoToWheat(amount).toFixed(),
      });
    }
  });

  Object.keys(offered).forEach((id) => {
    const amount = new BigNumber(offered[id]);
    const info = infos[id];

    if (info?.type === 'CAT') {
      requestedTokens.push({
        amount: mojoToCAT(amount).toFixed(),
        assetId: id,
      });
    } else if (info?.type === 'singleton') {
      requestedNfts.push({
        nftId: launcherIdToNFTId(info.launcherId),
      });
    } else if (id === 'wheat') {
      requestedWheat.push({
        amount: mojoToWheat(amount).toFixed(),
      });
    }
  });

  return {
    offered: {
      wheat: offeredWheat,
      tokens: offeredTokens,
      nfts: offeredNfts,
      fee: offeredFee,
    },
    requested: {
      wheat: requestedWheat,
      tokens: requestedTokens,
      nfts: requestedNfts,
      fee: [
        {
          amount: mojoToWheat(fees).toFixed(),
        },
      ],
    },
  };
}
