import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
function AddNewBooking() {
    const bookings = useSelector((state: any) => state.booking);
    const dispatch = useDispatch();

    const [bookingId, setBookingId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [dateAndTime, setDateAndTime] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [userId, setUserId] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const resetForm = () => {
        setBookingId("");
        setCustomerName("");
        setAddress("");
        setDateAndTime("");
        setServiceType("");
        setUserId("");
        setIsEditing(false);
    };

    const validateFields = () => {
        const namePattern = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;
        if (!customerName || customerName.length < 3 || !namePattern.test(customerName)) {
            Swal.fire("Error", "Customer name must be at least 3 characters long and start with capital letters", "error");
            return false;
        }
        if (!address || address.length < 5) {
            Swal.fire("Error", "Address must be at least 5 characters long", "error");
            return false;
        }

        if (!dateAndTime || isNaN(new Date(dateAndTime).getTime())) {
            Swal.fire("Error", "Invalid date and time!", "error");
            return false;
        }

        if (!serviceType) {
            Swal.fire("Error", "Service type is required!", "error");
            return false;
        }

        if (!userId || isNaN(Number(userId))) {
            Swal.fire("Error", "User ID must be a valid number", "error");
            return false;
        }

        return true;
    };

    const handleAdd = () => {
        if (!validateFields()) return;

        const newBooking = {
            id: crypto.randomUUID(),
            customerName,
            address,
            dateTime: new Date(dateAndTime).toISOString(),
            serviceType,
            userId: parseInt(userId),
        };
        dispatch(saveBooking(newBooking));
        Swal.fire("Success", "Booking added!", "success");
        resetForm();
    };
    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 rounded" />
                <input type="datetime-local" value={dateAndTime} onChange={(e) => setDateAndTime(e.target.value)} className="border p-2 rounded" />
                <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="border p-2 rounded">
                    <option value="">Select Service Type</option>
                    <option value="Regular Cleaning">Regular Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move-Out Cleaning">Move-Out Cleaning</option>
                    <option value="Window Cleaning">Window Cleaning</option>
                </select>
                <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} className="border p-2 rounded" />
            </div>

            <div className="flex justify-end">
                {isEditing ? (
                    <>
                        <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">Update</button>
                        <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                    </>
                ) : (
                    <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded">Add</button>
                )}
            </div>

            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-teal-600 text-white">
                    <th className="border px-4 py-2">Booking ID</th>
                    <th className="border px-4 py-2">Customer</th>
                    <th className="border px-4 py-2">Address</th>
                    <th className="border px-4 py-2">Date & Time</th>
                    <th className="border px-4 py-2">Service</th>
                    <th className="border px-4 py-2">User ID</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((b: any) => (
                    <tr key={b.id} className="hover:bg-slate-100">
                        <td className="border px-4 py-2">{b.id}</td>
                        <td className="border px-4 py-2">{b.customerName}</td>
                        <td className="border px-4 py-2">{b.address}</td>
                        <td className="border px-4 py-2">{b.dateTime}</td>
                        <td className="border px-4 py-2">{b.serviceType}</td>
                        <td className="border px-4 py-2">{b.userId}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => handleEdit(b)} className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">Edit</button>
                            <button onClick={() => handleDelete(b.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddNewBooking;
