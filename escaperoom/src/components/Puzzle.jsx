import React, { useState } from 'react';

const Puzzle = ({ puzzleData, onPuzzleSolved }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [solved, setSolved] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === puzzleData.correctAnswer.toLowerCase() && !solved) {
      setSolved(true);
      onPuzzleSolved();
    }
  };

  const toggleQuestionVisibility = () => {
    setIsQuestionVisible(prevState => !prevState);
  };

  return (
    <div className="border p-4 rounded shadow mb-4">
      <button 
        onClick={toggleQuestionVisibility} 
        className="text-lg font-semibold text-blue-500 hover:text-blue-700">
        {isQuestionVisible ? 'Verberg vraag' : ''}
      </button>

      {isQuestionVisible && (
        <>
          <h2 className="text-xl mt-4">{puzzleData.description}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Voer je antwoord in"
              className="mt-2 p-2 border rounded w-full"
              disabled={solved}
            />
            <button
              type="submit"
              className={`mt-2 px-4 py-2 rounded ${solved ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              disabled={solved}
            >
              Indienen
            </button>
          </form>
          {solved && <p className="mt-2 text-green-500">Puzzel opgelost!</p>}
        </>
      )}
    </div>
  );
};

export default Puzzle;