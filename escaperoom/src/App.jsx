import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartPage';
import Room from './components/Room';
import rooms from './data/rooms';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} /> {}
        {rooms.map((room) => (
          <Route
            key={room.id}
            path={`/kamer/${room.id}`}
            element={<Room roomData={room} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;