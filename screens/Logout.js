import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Logic for logout
    console.log('Logged out successfully');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
