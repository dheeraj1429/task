import { configureStore } from '@reduxjs/toolkit';
import { posts } from '../features/posts/post.api';
export const store = configureStore({
   reducer: {
      [posts.reducerPath]: posts.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(posts.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
