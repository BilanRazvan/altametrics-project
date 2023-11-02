import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { InvoiceState } from "./interfaces";
import { getInvoices } from "../../utils/getInvoices";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await getInvoices({
      page: 1,
      limit: 25,
    });
    return response.data;
  }
);

const initialState: InvoiceState = {
  invoices: [],
  status: "idle",
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<InvoiceState>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { change } = invoicesSlice.actions;

export default invoicesSlice.reducer;
