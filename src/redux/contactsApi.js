import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.token;
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
});
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: baseQuery,
  tagTypes: ['AUTH'],
  endpoints: builder => ({
    getAll: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery } = contactsApi;
