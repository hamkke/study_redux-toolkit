import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterSlice from "./counterSlice";
import getDataSlice from "./getAxiosData";

const logger = createLogger();

export const store = configureStore({
  reducer: { counterSlice, getDataSlice },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
