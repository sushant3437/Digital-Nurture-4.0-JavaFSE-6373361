import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {
        isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <UserPage />
          </>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <GuestPage />
          </>
        )
      }
    </div>
  );
}

export default App;
