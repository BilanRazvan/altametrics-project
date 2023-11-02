import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./invoices";
import billsReducer from "./bills";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    bills: billsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
