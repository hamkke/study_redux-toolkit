import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const initialState = {
  value: 0,
  name: "서현",
  list: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(state.value);
      state.value += action.payload;
    },
  },
  extraReducers: {
    [getList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { increment, decrement, incrementByAmount, addList } =
  counterSlice.actions;

export default counterSlice.reducer;

export const getGet = (state) => state.counters.value;
