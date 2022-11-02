import React from 'react';
import  { useState } from 'react';
import './AddUserForm.css';

const AddUserForm =  () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const userNameHandler = (e) => {
        setUserName(e.target.value);   
    }
    const userAgeHanlder = (e) => {
        setUserAge(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            return alert('Form fields cannot be empty');
        }
        if(userAge < 1) {
             return alert('Enter a valid age');
        }
        console.log(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    return (
        <div>
            <form className="add-user-form" onSubmit={submitHandler}>
                <label htmlFor="username" id="username"><b>Username</b></label>
                <input 
                    type="text"
                    name="username"
                    value={userName}
                    onChange={userNameHandler}/>
                <label htmlFor="user_age" id="user_age"><b>Age (years)</b></label>
                <input 
                    type="number"
                    name="user_age"
                    value={userAge}
                    onChange={userAgeHanlder}/>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUserForm 