import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Action for Sign Up function

export const userSignUp = createAsyncThunk("userSignUp", async (body) => {
  const result = await axios.post(
    "http://localhost:8800/api/customers/register",
    body
  );
  console.log(result.data);
  return result.data;
});

//Slice for Sign Up function

const userSignUpSlice = createSlice({
  name: "userSignUp",
  initialState: {
    isLoading: false,
    isError: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default userSignUpSlice.reducer;
