import React, { use } from 'react'
import AuthProvider from '../contexts/AuthProvider';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const context = use(AuthContext)
  console.log(context);
  
  return (
    <div>
      Home
    </div>
  )
}

export default Home
