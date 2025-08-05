#  Intern Portal - Full Stack Application

A simple full-stack intern portal dashboard built with React (frontend) and Node.js/Express (backend).

##  Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM

##  Features

###  Core Features
- **Login/Signup Page** - Mock authentication (no actual auth)
- **Dashboard** - Displays:
  - Intern name
  - Referral code
  - Total donations raised
  - Rewards/unlockables section
- **Leaderboard** - Top performers based on donations

###  API Endpoints
- `GET /api/user/:id` - Get user details
- `GET /api/leaderboard` - Get top performers
- `POST /api/seed` - Seed database with dummy data
- `GET /api/health` - Health check

##  Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kdurgamaheshm/Intern-Portal/
cd intern-portal
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd client
npm install
```

4. **Set up environment variables**
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/intern-portal
PORT=5000
```

5. **Start MongoDB**
Make sure MongoDB is running on your system.

6. **Seed the database**
```bash
npm run dev
# Then make a POST request to http://localhost:5000/api/seed
```

7. **Run the application**

**Option 1: Run both frontend and backend concurrently**
```bash
npm run dev:full
```

**Option 2: Run backend and frontend separately**
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

##  Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

##  Project Structure

```
intern-portal/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   └── Leaderboard.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── Server/
│    ├── server.js              # Express server
│    ├── package.json           # Backend dependencies
│     └── .env                  # Environment variables
└── README.md
```

##  Usage

1. **Login Page**: Enter any email/password to access the dashboard
2. **Dashboard**: View your profile, referral code, donations, and rewards
3. **Leaderboard**: See top performers based on donations raised

##  Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend: `cd client && npm run build`
2. Deploy the `build` folder to Netlify or Vercel

### Backend (Render/Heroku)
1. Add MongoDB Atlas connection string to `.env`
2. Deploy to Render, Heroku, or Railway

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is open source and available under the [MIT License](LICENSE).
