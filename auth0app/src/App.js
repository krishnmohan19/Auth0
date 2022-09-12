import React from 'react';
import './App.css';
import Login from "./components/login"
import Logout from './components/logout';
import Profile from './components/profile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const {isLoading}=useAuth0();
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div >
      <Login/>
      <Logout/>
      <Profile/>
    </div>
  );
}

export default App;
