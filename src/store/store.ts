import { configureStore } from "@reduxjs/toolkit";
import HeaderState from "../components/header/headerReducer";
import RecipieDetailState from "../components/recipie-detail/recipieDetail";

export const store = configureStore({
  reducer: {
    headerStore: HeaderState,
    recipieDetailStore: RecipieDetailState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
