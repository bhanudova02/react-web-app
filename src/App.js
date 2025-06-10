import { Routes,Route } from 'react-router-dom';
import Demo from './components/Demo';
import { TimeOutDemo } from './components/timer-events/time-out-demo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TimeOutDemo/>}/>
        <Route path="/demo" element={<Demo/>}/>
      </Routes>
    </div>
  )
}

export default App