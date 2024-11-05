import React from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms';
import Room from './Room';

const RoomPage = () => {
  const { id } = useParams();
  const roomData = rooms.find(room => room.id === parseInt(id));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {roomData ? (
        <Room roomData={roomData} />
      ) : (
        <p className="text-red-500">Kamer niet gevonden.</p>
      )}
    </div>
  );
};

export default RoomPage;