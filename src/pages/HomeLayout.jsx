import React from 'react'

const HomeLayout = ({user}) => {
  return (
    <div>
       <h2>Welcome, {user?.name}</h2>
    </div>
  )
}

export default HomeLayout
