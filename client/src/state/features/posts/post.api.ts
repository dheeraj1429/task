import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetPostsInterface } from '.';

const tagTypesObject = {
   PostsTag: 'PostsTag',
};

export const posts = createApi({
   reducerPath: 'posts',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.publicapis.org/',
   }),
   tagTypes: [...Object.keys(tagTypesObject)],
   endpoints: (builder) => ({
      getPosts: builder.query<GetPostsInterface, void>({
         query: () => ({
            url: 'entries',
         }),
         providesTags: [tagTypesObject.PostsTag],
      }),
   }),
});

export const { useGetPostsQuery } = posts;
