const API_HOSTNAME = '/api/v1/game';

const constructUrl = url => `${API_HOSTNAME}${url}`;

export const WELCOME_MESSAGE_URL = constructUrl('/info/welcomeMessage');
export const INSTRUCTIONS_URL = constructUrl('/info/instructions');
export const UNITS_URL = constructUrl('/info/units');
export const CATEGORIES_URL = constructUrl('/categories');
export const CATEGORY_URL = constructUrl('/categories/:categoryId');
export const QUESTIONS_URL = constructUrl('/questions');
export const CATEGORY_QUESTIONS_URL = constructUrl(
  '/categories/:categoryId/questions'
);
