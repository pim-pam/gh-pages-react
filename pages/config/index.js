const IS_DEV = process.env.NODE_ENV !== 'production';

export const BASE_URL = IS_DEV ? 'http://localhost:3000' : 'https://your_deployment.server.com';
export const API_URL = `${BASE_URL}/api`