import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    referralCode: 'john2025',
    donationsRaised: 1500,
    rewards: ['Bronze Badge', 'Silver Badge']
  });

  // Mock user data - in real app, fetch from API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser({
        name: 'K Durga Mahesh',
        referralCode: 'mahesh2023',
        donationsRaised: 1500,
        rewards: ['Bronze Badge', 'Silver Badge', 'Gold Badge']
      });
    }, 500);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">

        <button className="logout-button" onClick={() => {window.location.href="http://localhost:3000/"}} ><b>Logout</b></button>
          <h1>Welcome to Your Intern Dashboard
        </h1>
      </header>

      <div className="dashboard-content">
        <div className="user-info-card">
          <h2>Your Profile</h2>
          <div className="info-item">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="info-item">
            <strong>Referral Code:</strong> <span className="referral-code">{user.referralCode}</span>
          </div>
          <div className="info-item">
            <strong>Total Donations Raised:</strong> <span className="amount">₹{user.donationsRaised}</span>
          </div>
        </div>

        <div className="rewards-card">
          <h2>Your Rewards</h2>
          <div className="rewards-list">
            {user.rewards.map((reward, index) => (
              <div key={index} className="reward-item">
                <span className="reward-badge">{reward}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="unlockables-card">
          <h2>Unlockables</h2>
          <div className="unlockables-list">
            <div className="unlockable-item">
              <span className="unlockable-title">Platinum Badge</span>
              <span className="unlockable-requirement">Raise <h5>₹500</h5></span>
            </div>
            <div className="unlockable-item">
              <span className="unlockable-title">Diamond Badge</span>
              <span className="unlockable-requirement">Raise <h5>₹1000</h5></span>
            </div>
            <div className="unlockable-item">
              <span className="unlockable-title">VIP Status</span>
              <span className="unlockable-requirement">Raise <h5>₹2000</h5></span>
            </div>
          </div>
        </div>
        <div className="leaderboard">
            <h2><a href="http://localhost:3000/leaderboard">Leaderboard</a></h2>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
