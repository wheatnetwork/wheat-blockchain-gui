import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './wheatLazyBaseQuery';

export { baseQuery };

export default createApi({
  reducerPath: 'wheatApi',
  baseQuery,
  endpoints: () => ({}),
});
