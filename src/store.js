import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterSlice from "./counterSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: { counters: counterSlice },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
