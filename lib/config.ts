export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    AUTH: {
      SIGNUP: '/api/v1/auth/signup',
      LOGIN: '/api/v1/auth/login',
    },
    GENERATE: '/api/v1/generate',
    CHATS: {
      LIST: '/api/v1/chats',
      DETAIL: (id: number) => `/api/v1/chats/${id}`,
    },
  },
} as const;
