import React, { useState } from 'react';
import Puzzle from './Puzzle';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Room = ({ roomData }) => {
  const [puzzlesSolved, setPuzzlesSolved] = useState(0);
  const navigate = useNavigate();

  const handlePuzzleSolved = () => {
    setPuzzlesSolved(prev => prev + 1);
  };

  const handleNextRoom = () => {
    navigate(`/kamer/${roomData.id + 1}`); 
  };

  const handleReturnToStart = () => {
    navigate('/'); 
  };

  const backgroundStyle = {
    backgroundImage: `url(/img/Room${roomData.id}.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', 
    width: '100%',
  };

  return (
    <div style={backgroundStyle} className="room-container">
      <h1 className="room-title">{roomData.title}</h1>
      <Timer duration={roomData.timer} />
      <div className="mt-6 space-y-4 w-full">
        {roomData.puzzles.map((puzzle) => (
          <Puzzle key={puzzle.id} puzzleData={puzzle} onPuzzleSolved={handlePuzzleSolved} />
        ))}
      </div>
      {puzzlesSolved === roomData.puzzles.length && (
        <div className="mt-6 space-y-4">
          {roomData.id === 3 ? (
            <button
              onClick={handleReturnToStart}
              className="start-screen-button"
            >
              Terug naar het startscherm
            </button>
          ) : (
            <button
              onClick={handleNextRoom}
              className="next-room-button"
            >
              Ga naar de volgende kamer
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Room;