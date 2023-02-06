import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {

const users = useSelector((state) => state.users)

const usersData = () => {
  return users.map((user) => user.username)
}

const length = users.length

  return (
    <div>
      <ul>
        Users!
        {usersData()}
        Total Users: {length}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
