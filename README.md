# 🌿 Bright Path Speech Therapy

A modern, responsive full-stack website built for a speech therapy practice. Bright Path provides visitors with information about services, new-patient resources, appointment requests, and contact options through a clean and accessible interface.

The project also includes an admin dashboard for managing contact and appointment submissions.

---

## ✨ Features

### Public Website

- Responsive design for mobile, tablet, and desktop
- Modern landing page
- Speech therapy services
- New patient information
- New patient intake form
- Appointment / consultation booking
- Contact form
- FAQ section
- Service area map with React Leaflet
- Smooth scroll and reveal animations
- Light / dark mode

### Admin Dashboard

- Dashboard
- Contact submissions
- Appointment submissions
- Search and sorting
- Pagination
- Edit and delete contacts
- Intake submission management

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- JavaScript
- React Leaflet
- Leaflet
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 🚀 Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
Runs the Next.js application at:
http://localhost:3000

Backend
Open a second terminal:
cd backend
npm install
npm run dev
Runs the Express API at: http://localhost:5000

Environment Variables
Create a .env file inside backend/:
MONGO_URI=your_mongodb_connection_string
PORT=5000
--------------------------------------------
🔄 Application Flow
Visitor
   ↓
Contact / Appointment / Intake Form
   ↓
Express API
   ↓
MongoDB
   ↓
Admin Dashboard
🧪 Testing

Before deployment, verify:

 Contact form works
 Appointment form works
 Intake form works
 MongoDB saves submissions
 Admin dashboard works
 Map loads correctly
 Dark mode works
 Mobile layout works
----
deployed:
Frontend: https://bright-path-therapy.vercel.app

Backend: https://bright-path-therapy-7q44.vercel.app

MongoDB: connected through Vercel's MONGO_URI
----
