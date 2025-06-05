import React from 'react'
import Weather from './components/Weather'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Demo from './components/Demo';
import { ClassBinding } from './components/ClassBinding';
import { MouseAnimation } from './components/MouseAnimation';
import { KeyDemo } from './components/key-demo/KeyDemo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<KeyDemo/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </div>
  )
}

export default App