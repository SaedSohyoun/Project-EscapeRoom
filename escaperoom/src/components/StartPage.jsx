import React from 'react';
import { useNavigate } from 'react-router-dom';

const Startpage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/kamer/1');
  };

  return (
    <div className="start-screen">
      <h1>Welkom bij de Escape Room!</h1>
      <button onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default Startpage;
