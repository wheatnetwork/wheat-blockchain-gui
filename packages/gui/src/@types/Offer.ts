import { type OfferSummaryRecord } from '@wheat-network/api';

type Offer = {
  id: string;
  valid: boolean;
  data: string;
  summary: OfferSummaryRecord;
};

export default Offer;
