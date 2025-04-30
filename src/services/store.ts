import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./BookingSlice.ts";
import homeSlice from "./HomeSlice.ts";
export const store = configureStore({
    reducer: {
        booking: bookingSlice,
        home: homeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
