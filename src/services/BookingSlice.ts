import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {Booking} from "../model/Booking.ts";

const initialState: Booking[] = [];

const api = axios.create({
    baseURL: "http://localhost:3002/booking"
});
export const saveBooking = createAsyncThunk(
    'booking/saveBooking',
    async (booking: Booking) => {
        const response = await api.post('/add', booking);
        return response.data;
    }
);
export const getBookings = createAsyncThunk(
    'booking/getBookings',
    async () => {
        const response = await api.get('/view');
        return response.data;
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addNewBooking: (state, action: PayloadAction<Booking>) => {
            state.push(action.payload);
        },
        deleteBookingById: (state, action: PayloadAction<string>) => {
            return state.filter(b => b.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveBooking.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(getBookings.fulfilled, (_, action) => {
                return action.payload;
            });

    }
});

export default bookingSlice.reducer;
export const { addNewBooking, deleteBookingById } = bookingSlice.actions;
