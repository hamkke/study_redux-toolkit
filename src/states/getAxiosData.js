import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("GET_LIST", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const initialState = {
  list: [],
  status: null,
};

export const getDataSlice = createSlice({
  name: "getList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = [...action.payload];
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getList.pending, (state, action) => {
      state.status = action.meta.requestStatus;
    });
  },
});

export default getDataSlice.reducer;
