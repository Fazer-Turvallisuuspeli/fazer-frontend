import React, { useState, useEffect } from 'react';

import InfoDisplay from '../components/InfoDisplay';

const MainMenuScreen = () => {
  const [welcomeMessage, setWelcomeMessage] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:8080/game');
      const data = await response.json();

      setWelcomeMessage(data.welcomeMessage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <h1>Tervetuloa, SUKUNIMI_TÄHÄN</h1>

      <InfoDisplay data={welcomeMessage} />
    </div>
  );
};

export default MainMenuScreen;
