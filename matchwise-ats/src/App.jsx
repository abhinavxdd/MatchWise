import React from 'react'
import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div className='min-h-screen' style={{ backgroundColor: '#1c1c1c' }}>
      <Navbar />
      <div>
        <Content />
      </div>
    </div>
  )
}

export default App