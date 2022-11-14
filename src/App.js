import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';


function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (username, age) => {
    setUsersList((prevList) => {
      return [...prevList, { name: username, age: age, id: Math.random().toString() }]
    })
  }

  return (
    <div className="main-container">
      <AddUserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
