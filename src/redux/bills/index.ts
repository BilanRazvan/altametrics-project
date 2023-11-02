import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BillState } from "./interfaces";
import { getBills } from "../../utils/getBills";

export const fetchBills = createAsyncThunk("bills/fetchBills", async () => {
  const response = await getBills({
    page: 1,
    limit: 25,
  });
  return response.data;
});

const initialState: BillState = {
  bills: [],
  status: "idle",
};

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<BillState>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bills = action.payload;
      })
      .addCase(fetchBills.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { change } = billsSlice.actions;

export default billsSlice.reducer;
