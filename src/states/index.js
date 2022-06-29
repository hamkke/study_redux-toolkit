import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterSlice from "./counterSlice";
import getDataSlice from "./getAxiosData";

const logger = createLogger();

export const store = configureStore({
  reducer: { counterSlice, getDataSlice },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  /*
  직렬화할 수 없는 값을 state, action에 넣기 ㄴㄴ.
  하지만 직렬화할 수 없는 데이터를 수락해야 하는 작업을 처리해야 하는 경우가 있을 수 있음.
  직렬화 불가능한 payload는 reducer를 통해 애플리케이션 상태로 만들지 않아야 함
  정말 불가피하다면 serializableCheck: false 를 통해 위 이미지와 같은 오류를 없앨 수 있음.
  */
  // getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
