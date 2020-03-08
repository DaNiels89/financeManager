import React from 'react';

import './assets/css/App.css';

import UserInformation from './assets/components/UserInformation';

function App() {
  return (
    <div className="app">
      <h1>Finance Manager</h1>
      <UserInformation />
    </div>
  );
}

export default App;
