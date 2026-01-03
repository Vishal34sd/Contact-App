# 📇 Contact Management App

A simple full-stack **Contact Management Application** built using the **MERN stack**.  
This application allows users to **add**, **view**, and **delete** contacts.  
The project focuses on clean REST APIs, proper folder structure, and smooth frontend–backend integration.

---

## 🚀 Features

- ➕ Add new contacts  
- 📋 View all saved contacts  
- ❌ Delete existing contacts  
- 🌐 RESTful API design  
- ⚡ Fast and responsive UI  
- 🧩 Clean and scalable project structure  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- Vite / Create React App  
- Tailwind CSS 

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  
- cors  

---

## 📁 Project Folder Structure

### Backend (`/backend`)
```
backend/
│── config/
│   └── db.js
│
│── controllers/
│   └── contactController.js
│
│── models/
│   └── contactModel.js
│
│── routes/
│   └── contactRoutes.js
│
│── .env
│── server.js
│── package.json
```

### Frontend (`/frontend`)
```
frontend/
│── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   └── ContactList.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
│── public/
│── package.json
│── vite.config.js
```

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or MongoDB Atlas)
- Git

---

## 🧩 Backend Setup

1. Navigate to backend folder
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the backend root
```
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

4. Start the backend server
```bash
npm run dev
# or
npm start
```

---

## 🎨 Frontend Setup

1. Navigate to frontend folder
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the frontend server
```bash
npm run dev
```

---
