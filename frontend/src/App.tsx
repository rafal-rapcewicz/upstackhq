import React from 'react';
import logo from './logo.svg';

// Users & UsersUseThunkReducer are working with ThunkApp
// import { Users } from './components/Users';
// import { Users } from './components/UsersUseThunkReducer';

// is working with SagaApp
import { Users } from './components/UsersSaga';

import './App.scss';

// 2 ways of using async thunk actions a) with "root" reducer & b) with "local" useReducer
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users />
      </header>
    </div>
  );
}

export default App;
