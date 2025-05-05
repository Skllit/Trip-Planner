# 🧳 Trip Planner Web Application

A full-featured MERN-based web application for planning, booking, and managing trips with user and admin roles. Built using Angular, Node.js, Express, and MongoDB.


## 🗂️ Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Pages & Functionality](#pages--functionality)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [License](#license)

---

## ✨ Features

- 🔐 JWT-based Authentication (Login/Register)
- 👤 User Dashboard with Upcoming Bookings
- 🧭 Browse and view Trip details
- 💳 Razorpay Integration for Payments
- 📅 Admin Panel to manage Users, Trips & Bookings
- 📉 Cancel bookings with fine logic
- 📊 Responsive UI using Angular Material
- 🔔 Global Loading Bar & Toast Notifications

---

## 🖼️ Screenshots

### 🔑 Login / Register  
_Add screenshot here_  
![Screenshot 2025-05-05 155920](https://github.com/user-attachments/assets/d3ae6899-4e5e-4969-89d6-a3608f0348b0)



---

### 🏠 User Dashboard  
_Add screenshot here_  
![Screenshot 2025-05-05 155948](https://github.com/user-attachments/assets/f6b80376-3d3d-4459-b767-91ecfe2b1dda)


---


### 📄 Trip Details + Booking  
_Add screenshot here_  
![Screenshot 2025-05-05 160020](https://github.com/user-attachments/assets/a5937764-9bdf-4744-a313-352fd4b14879)


---

### 💰 Payment Page (Razorpay)  
_Add screenshot here_  
![Screenshot 2025-05-05 160042](https://github.com/user-attachments/assets/35ba9353-903c-4e00-bcb6-1147cee994ea)


---

### 📋 My Bookings  
_Add screenshot here_  
![Screenshot 2025-05-05 160515](https://github.com/user-attachments/assets/276f3126-5878-4089-b0ce-f7f22596311f)


---


### 🧑‍💼 Admin Dashboard  
_Add screenshot here_  
![Screenshot 2025-05-05 160610](https://github.com/user-attachments/assets/c4edb052-9c3d-4be0-9b15-14b67f8a1ee6)


---

### ✏️ Trip Management (Admin)  
_Add screenshot here_  
![Screenshot 2025-05-05 160631](https://github.com/user-attachments/assets/5d49ffa5-c501-410d-b161-157e9c0f6c12)


---

### 📥 Enrollment Management (Admin)  
_Add screenshot here_  
![Screenshot 2025-05-05 160711](https://github.com/user-attachments/assets/888bdc1d-3e64-4be9-9dc2-f79c4f911adf)


---

### 👥 User Management (Admin)  
_Add screenshot here_  
![Screenshot 2025-05-05 160641](https://github.com/user-attachments/assets/33590523-45f6-41fe-8b3a-cd3b470615cb)


---

## 🛠 Tech Stack

**Frontend:**
- Angular 17 (standalone components)
- Angular Material UI
- RxJS & HTTPClient
- Razorpay Checkout Integration


---

## 📄 Pages & Functionality

### 👥 Authentication
- Register and login with email & password
- JWT token stored in localStorage
- Route protection via AuthGuard & AdminGuard

---

### 🧑 User Features

- View available trips in card layout
- Click to view detailed trip info
- Book seats and proceed to payment
- Razorpay integration for test payments
- View personal enrollments with status
- Cancel an approved booking  
  - 💸 **Fine applied** (e.g. ₹100/seat or 10% of cost)

---

### 🧑‍💼 Admin Features

- **Trip Management**: Create, edit, delete trips
- **User Management**: View/delete users
- **Enrollment Management**: View all bookings, approve/reject/cancel any
- Separate Admin Dashboard view

---

### 📉 Cancellation Fee Logic

- Only **Approved** bookings are cancellable
- Fine calculated as:


**Backend:**
- Node.js + Express (ESModules)
- MongoDB + Mongoose
- JWT for auth
- RESTful API


---

## 🌐 API Endpoints

| Method | Route                             | Description                     |
|--------|-----------------------------------|---------------------------------|
| POST   | `/api/auth/register`              | Register new user               |
| POST   | `/api/auth/login`                 | Login and return JWT            |
| GET    | `/api/trips`                      | List all trips                  |
| GET    | `/api/trips/:id`                  | Trip details                    |
| POST   | `/api/trips/:id/enroll`           | Book trip with payment          |
| GET    | `/api/trips/enrolled`             | View user’s bookings            |
| POST   | `/api/enrollments/:id/cancel`     | Cancel a booking                |
| GET    | `/api/enrollments`                | Admin: list all enrollments     |
| PUT    | `/api/enrollments/:id`            | Admin: approve/reject enrollment|
| GET    | `/api/users`                      | Admin: list all users           |
| DELETE | `/api/users/:id`                  | Admin: delete a user            |

---

## 🚀 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/trip-planner.git
cd trip-planner

cd trip-backend
npm install
# Add .env with MONGO_URI, JWT_SECRET, etc.
npm run dev


cd ../trip-planner
npm install
ng serve

