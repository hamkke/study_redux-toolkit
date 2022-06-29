# redux-toolkit 공부

## createAsyncThunk 를 통한 비동기 액션 구성

```js
export const getList = createAsyncThunk("GET_LIST", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});
```

## extraReducers로 프로미스 상태에 따른 리듀서를 정할 수 있다

```js
  extraReducers: (builder) => {
    console.log(builder);
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = [...action.payload];
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getList.pending, (state, action) => {
      state.status = action.meta.requestStatus;
    });
  },
```

## 직렬화할 수 없는 값을 state, action에 넣기 ㄴㄴ

하지만 직렬화할 수 없는 데이터를 수락해야 하는 작업을
처리해야 하는 경우가 있을 수 있음.
직렬화 불가능한 payload는 reducer를 통해 애플리케이션 상태로 만들지 않아야 함
정말 불가피하다면 serializableCheck: false 를 통해 오류를 없앨 수 있음.

```js
middleware: getDefaultMiddleware({ serializableCheck: false }).concat(logger);
```
