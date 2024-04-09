import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosClient } from "../api/axios";
import { IDoctors } from "@/types";

interface IDoctorsProfile {
  loading: boolean;
  data: IDoctors[];
  errors: any;
}

const initialState: IDoctorsProfile = {
  loading: false,
  data: [],
  errors: null,
};

export const fetchDoctors = createAsyncThunk(
  "getAllDoctors",
  async (thunkApi) => {
    const response = (await axiosClient.get("/doctors")).data;
    return response.message;
  },
);

export const addDoctor = createAsyncThunk(
  "addDoctor",
  async (data: IDoctors, thunkApi) => {
    const response = (await axiosClient.post("/doctors", data)).data;
    return response.message;
  },
);

export const updateDoctor = createAsyncThunk(
  "updateDoctor",
  async (data: IDoctors, thunkApi) => {
    const response = (await axiosClient.put("/doctors", data)).data;
    return response.message;
  },
);
export const deleteDoctor = createAsyncThunk(
  "deleteDoctor",
  async (doctorID: IDoctors, thunkApi) => {
    const response = (await axiosClient.delete(`/doctors/?_id=${doctorID}`))
      .data;
    return response.message;
  },
);

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(fetchDoctors.pending, (state, action) => {
      state.data = [];
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(addDoctor.pending, (state, action) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(addDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [...state.data, action.payload];
      state.errors = null;
    });
    builder.addCase(addDoctor.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.errors = action.payload;
    });
    builder.addCase(updateDoctor.pending, (state, action) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(updateDoctor.fulfilled, (state, action) => {
      const updatedDoctor = action.payload;
      const updatedIndex = state.data.findIndex(
        (doctor: any) => doctor._id === updatedDoctor._id,
      );
      if (updatedIndex !== -1) {
        state.data[updatedIndex] = updatedDoctor;
      }
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(updateDoctor.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.errors = action.payload;
    });
    builder
      .addCase(deleteDoctor.pending, (state, action) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          (doctor: any) => doctor._id !== action.payload.deletedDoctorId,
        );
        state.errors = null;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      });
  },
});

export default doctorSlice.reducer;
