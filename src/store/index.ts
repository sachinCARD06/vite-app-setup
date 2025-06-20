import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // (If unresolved, update tsconfig paths or rename to "./userSlice.ts")

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
