// Import necessary dependencies and types
import { IUser } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserInfoApi,
  loginUserApi,
  logoutUser,
  registerUserApi,
} from "../api/auth";

// Define the initial state interface
export interface IAuthState {
  authState: boolean;
  user?: IUser | null;
  errors: any;
}

// Define the initial state
const initialState: IAuthState = {
  authState: false,
  user: null,
  errors: null,
};

// Create an asynchronous thunk for logging in
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data: any, thunkApi) => {
    try {
      const response = await loginUserApi(data);
      return response.message;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || "An error occurred");
    }
  },
);

// Create an asynchronous thunk for registering
export const registerUser = createAsyncThunk(
  "registerUser",
  async (data: IUser, thunkApi) => {
    const response = await registerUserApi(data);
    return response.message;
  },
);

export const fetchUser = createAsyncThunk(
  "fetchUserInfo",
  async (_, thunkApi) => {
    const response = await getUserInfoApi();
    return response.message;
  },
);
export const logoutSession = createAsyncThunk(
  "logoutUser",
  async (_, thunkApi) => {
    const response = await logoutUser();
    return response.message;
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.authState = true;
      state.errors = null;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.authState = false;
      state.errors = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.authState = false;
      state.errors = action.error.message;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.authState = true;
      state.errors = null;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.authState = false;
      state.errors = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.user = null;
      state.authState = false;
      state.errors = action.error.message;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authState = true;
      state.errors = null;
    });
    builder.addCase(fetchUser.pending, (state) => {});
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user = null;
      state.authState = false;
      state.errors = action.error.message;
    });
    builder.addCase(logoutSession.fulfilled, (state, action) => {
      state.user = null;
      state.authState = false;
      state.errors = null;
    });
  },
});

export default authSlice.reducer;
