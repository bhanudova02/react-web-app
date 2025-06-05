import React from 'react'
import Weather from './components/Weather'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Demo from './components/Demo';
import { ClassBinding } from './components/ClassBinding';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClassBinding/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </div>
  )
}

export default App