// API Configuration
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1',
    ENDPOINTS: {
        AUTH: {
            SIGNUP: '/api/v1/auth/signup',
            LOGIN: '/api/v1/auth/login',
        },
        GENERATE: '/generate',
        CHATS: {
            LIST: '/chats',
            DETAIL: (id: number) => `/chats/${id}`,
        },
    },
} as const;
