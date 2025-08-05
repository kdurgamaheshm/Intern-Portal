import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { name: 'K Durga Mahesh', donationsRaised: 1500, referralCode: 'mahesh2023' },
    { name: 'Siva Sankar', donationsRaised: 1200, referralCode: 'sankar123' },
    { name: 'Danush', donationsRaised: 800, referralCode: 'danush2022' },
    { name: 'Akhilesh', donationsRaised: 750, referralCode: 'akhilesh2025' },
    { name: 'Sai', donationsRaised: 600, referralCode: 'sai2003' }
  ]);

  // Mock leaderboard data - in real app, fetch from API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        { name: 'K Durga Mahesh', donationsRaised: 1500, referralCode: 'mahesh2023' },
        { name: 'Siva Sankar', donationsRaised: 1200, referralCode: 'sankar123' },
        { name: 'Danush', donationsRaised: 800, referralCode: 'danush2022' },
        { name: 'Akhilesh', donationsRaised: 750, referralCode: 'akhilesh2025' },
        { name: 'Sai', donationsRaised: 600, referralCode: 'sai2003' }
      ]);
    }, 500);
  }, []);

  return (
    <div className="leaderboard-container" id="leaderboard-container">
      <h1 color="black"><a href="http://localhost:3000/dashboard"> ←</a></h1>
      <header className="leaderboard-header">

        <h1>Leaderboard</h1>
        <p>Top performers based on donations raised</p>
      </header>

      <div className="leaderboard-table">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Referral Code</th>
              <th>Donations Raised</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index < 3 ? 'top-performer' : ''}>
                <td>
                  <span className={`rank-badge rank-${index + 1}`}>
                    {index + 1}
                  </span>
                </td>
                <td>{user.name}</td>
                <td className="referral-code">{user.referralCode}</td>
                <td className="amount">₹{user.donationsRaised}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
