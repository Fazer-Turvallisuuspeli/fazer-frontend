const baseUrl = '/api/v1/game/categories';

const getQuestions = async categoryId => {
  const response = await fetch(`${baseUrl}/${categoryId}/questions`);
  const data = await response.json();

  return data;
};

export default {
  getQuestions,
};
