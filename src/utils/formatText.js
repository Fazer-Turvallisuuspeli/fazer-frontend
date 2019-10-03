// Takes in some data and returns formatted text as an array of strings
export const formatText = data => {
  return data.split('\n').filter(Boolean);
};
