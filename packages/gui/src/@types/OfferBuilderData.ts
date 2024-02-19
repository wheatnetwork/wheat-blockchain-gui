type OfferBuilderData = {
  offered: {
    wheat: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
      crCat?: {
        flags: string[];
        authorizedProviders: string[];
      };
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
  requested: {
    wheat: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
      crCat?: {
        flags: string[];
        authorizedProviders: string[];
      };
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
};

export default OfferBuilderData;
