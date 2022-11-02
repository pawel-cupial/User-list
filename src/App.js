import React from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';


function App() {
  return (
    <div className="main-container">
      <AddUserForm/>
      <UserList />
    </div>
  );
}

export default App;
