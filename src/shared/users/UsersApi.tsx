import React, { useEffect, useState } from 'react'

const UsersApi = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    console.log(users);
    
     }
  , [])
  
  return{users }
  
}

export default UsersApi