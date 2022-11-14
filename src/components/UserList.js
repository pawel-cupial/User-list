import React from 'react';
import './UserList.css';

const UserList = (props) => {
    return (
        <div className="user-list">
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name}, {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList