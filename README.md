# Cleaning Service Management System

This web application allows users to book cleaning services and manage their bookings. It also includes an admin panel for managing service offerings and overseeing all bookings.

## Core Features

### User Functionality:
1. **Book a Cleaning Service**:
    - Add a booking with fields like:
        - Customer Name
        - Address
        - Date and Time
        - Service Type (dropdown: e.g., Deep Cleaning, Carpet Cleaning, etc.)
          -userId

2. **View and Manage Bookings**:
    - List all bookings made by the user.
    - Edit or cancel a booking.


    ### Technical Requirements

#### Backend:
- **Endpoints for Users**:
    - `GET /bookings`: Retrieve all bookings for the logged-in user.
    - `POST /bookings`: Add a new booking.
    - `PUT /bookings/:id`: Update a specific booking.
    - `DELETE /bookings/:id`: Cancel a booking.

#### Frontend:
- **User Pages**:
    - **Dashboard**: List all bookings for the logged-in user.
    - **Booking Form**: Add or edit a booking.

## Tools & Technologies Used

- **Frontend**:
    - React
    - Material UI / Tailwind CSS for styling
    - Axios for API calls

- **Backend**:
    - Node.js with Express
    - Prisma for ORM
    -  MySQL

- **Database**:
    -  MySQL

### Steps to Setup:

1. **Clone the Repository**:
   ```bash
   --backned
   git clone https://github.com/amashamaduwanthi/Cleaning_management_system.git
   --frontend
   git clone https://github.com/amashamaduwanthi/Cleaning_management_system_frontend.git
   cd cleaning-service-management
