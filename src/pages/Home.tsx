import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBookings} from "../services/HomeSlice.ts";

export function Home() {
    const home = useSelector((state: any) => state.home);
    const dispatch = useDispatch();
    const [deleteBookingId,setDeleteBookingId] = useState('');
    useEffect(() => {
        dispatch(getBookings());
    }, [dispatch]);


    function handleDeleteBooking() {

    }
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-user-tie text-blue-500 text-3xl"></i>
                    Booking System
                </h1>


                <Link to="/home/AddBooking">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add New Booking
                    </button>
                </Link>
                <Link to="/home/AddService">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Service
                    </button>
                </Link>

                <br/>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the Booking id"
                        value={deleteBookingId}
                        onChange={(e) => setDeleteBookingId(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <br/>
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteBooking}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                        >
                            Delete Booking
                        </button>
                    </div>
                </div>

                <br/>
                <ul className="space-y-6">
                    {home.map((bookingDetails: any, index: number) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-6 rounded-lg shadow-md ${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                            } hover:bg-teal-50 transition duration-200`}
                        >
                            <div className="flex items-center space-x-8">
                <span className="text-teal-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800">
                                        {bookingDetails.customerName}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Booking ID:</span> {bookingDetails.id}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Date:</span> {bookingDetails.dateTime}
                                    </p>

                                    <p className="text-base text-gray-700">
                                        <span className="font-semibold text-teal-800">Service Type</span> {bookingDetails.serviceType}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">User:</span> {bookingDetails.userId}
                                </p>

                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}