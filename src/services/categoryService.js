const baseUrl = '/api/v1/game/categories';

const getCategories = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
};

export default {
  getCategories,
};
