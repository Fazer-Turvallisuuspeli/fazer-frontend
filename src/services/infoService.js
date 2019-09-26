const baseUrl = '/api/v1/game/info';

const getInfo = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};

export default {
  getInfo,
};
