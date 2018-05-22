export default {
    setToken : (token) => window.localStorage.setItem('passport_token', token) ,
    getToken : () => window.localStorage.getItem('passport_token'),
    removeToken: () => window.localStorage.removeItem('passport_token')
}
