export default {
    API_ENDPOINT: (process.env.NODE_ENV==='production')
                ? process.env.REACT_APP_API_BASE_URL || 'https://nameless-hamlet-52392.herokuapp.com/api'
                : 'http://localhost:8000/api',

    API_TOKEN: process.env.REACT_APP_API_TOKEN,
    TOKEN_KEY: process.env.REACT_APP_JWT_SECRET
}

