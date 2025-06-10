import React from 'react'
import Navbar from './components/Navbar';
import Content from './components/content';

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div>
        <Navbar />
        <div className=''>
          <Content />
        </div>
        
      </div>
    </div>
  )
}

export default App