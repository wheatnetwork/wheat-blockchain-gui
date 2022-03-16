import { createApi } from '@reduxjs/toolkit/query/react';
import wheatLazyBaseQuery from './wheatLazyBaseQuery';

export const baseQuery = wheatLazyBaseQuery({});

export default createApi({
  reducerPath: 'wheatApi',
  baseQuery,
  endpoints: () => ({}),
});
