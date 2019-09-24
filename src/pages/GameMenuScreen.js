import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import InfoDisplay from '../components/InfoDisplay';

const GameMenuScreen = () => {
  const [instructions, setInstructions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const fetchData = async () => {
    const response = await fetch('/api/v1/game/info');
    const data = await response.json();

    setInstructions(data.instructions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Valitse kategoria</h1>

      {isModalOpen && <InfoDisplay data={instructions} />}

      <Link to="/gameMenu">
        <button type="button" onClick={handleModalClose}>
          Sulje
        </button>
      </Link>

      <Link to="/mainMenu">
        <button type="button">Palaa alkuun</button>
      </Link>
    </div>
  );
};

export default GameMenuScreen;
