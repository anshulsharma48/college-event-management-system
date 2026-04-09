🎓 College Event & Activity Management System

A full-stack MERN application designed to manage college events efficiently.
This system enables event creation, approval workflows, student registrations, attendance tracking, and certificate generation.

- 🌐 Frontend: https://college-event-management-system-gamma.vercel.app/
- ⚙️ Backend API: https://college-event-backend-ab78.onrender.com/

- ---

📌 Features

👨‍🎓 Student

- Register & Login
- View approved events
- Register for events
- View registered events
- Cancel registrations
- Download participation certificates

---

🛠️ Admin

- Create and manage events
- View all events and registrations
- Mark attendance
- Generate certificates
- Access reports and analytics

---

👨‍🏫 Faculty Coordinator

- View pending event requests
- Approve or reject events
- Control event visibility

---

🧑‍💼 Club Head

- Create event proposals
- Submit events for approval

---

🏗️ Tech Stack

Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

Backend

- Node.js
- Express.js
- JWT Authentication

Database

- MongoDB (MongoDB Atlas)

Deployment

- Frontend: Vercel
- Backend: Render

---

🔐 Authentication & Authorization

- JWT-based authentication system
- Role-based access control (RBAC)
- Protected routes for secure navigation

---

🔄 System Workflow

1. Club Head/Admin creates an event
2. Event is marked as Pending
3. Faculty Coordinator reviews the event
4. Approved events become visible to students
5. Students register for events
6. Admin marks attendance
7. Certificates are generated for attendees

---

🧪 API Endpoints

Authentication

POST /api/auth/register
POST /api/auth/login

Events

GET /api/events
POST /api/events
GET /api/events/pending
PUT /api/events/approve/:id
PUT /api/events/reject/:id

Registrations

POST /api/registrations
GET /api/registrations
DELETE /api/registrations/:id
PUT /api/registrations/attendance/:id

Notifications

GET /api/notifications
DELETE /api/notifications/:id
DELETE /api/notifications

---

📁 Project Structure

college-event-system/
│
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
└── README.md

---

⚙️ Installation & Setup

1. Clone repository

git clone https://github.com/your-username/college-event-system.git
cd college-event-system

---

2. Install dependencies

Backend

cd server
npm install

Frontend

cd client
npm install

---

3. Environment Variables

Create ".env" file in "/server":

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

---

4. Run the project

Start backend

cd server
npm start

Start frontend

cd client
npm run dev

---

🌐 Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- Database hosted on MongoDB Atlas

---

📊 Key Highlights

- Full role-based system (Student, Admin, Faculty, Club Head)
- End-to-end event lifecycle management
- Secure authentication system
- Real-time event registration flow
- Certificate generation system
- Scalable backend architecture

---

👨‍💻 Contributors

- Frontend Development
- Backend Development
- Database Design
- Deployment & Integration

---

📄 License

This project is developed for academic and educational purposes.

---

⭐ Conclusion

This system provides a centralized platform for managing college events digitally, reducing manual effort and improving efficiency across all user roles.
