import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {Booking} from "../model/Booking.ts";
const initialState: Booking[] = [];

const api = axios.create({
    baseURL: "http://localhost:3002/booking"
});

export const getBookings = createAsyncThunk(
    'booking/getBookings',
    async () => {
        const response = await api.get('/view');
        return response.data;
    }
);
const homeSlice = createSlice({
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
            .addCase(getBookings.fulfilled, (_, action) => {
                return action.payload;
            });
    }
});

export default homeSlice.reducer;
export const { addNewBooking, deleteBookingById } = homeSlice.actions;