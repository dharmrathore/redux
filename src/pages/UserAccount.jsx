import React from 'react';


const UserAccount = ({user}) => {
  return (
    <ul className="list-group">
       <li className='list-group-item'>{user.name}</li>
       <li className='list-group-item'>{user.email}</li>
       <li className='list-group-item'>{user.phone}</li>
       <li className='list-group-item'>{user.address}</li>
       <li className='list-group-item'>{user.city}</li>
       <li className='list-group-item'>{user.state}</li>
       <li className='list-group-item'>{user.zip}</li>
       <li className='list-group-item'>{user.country}</li>
    </ul>
  );
};

export default UserAccount;

