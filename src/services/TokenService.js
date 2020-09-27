import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },

  saveLocalUser(user, user_id) {
    window.sessionStorage.setItem(config.USER, user)
    window.sessionStorage.setItem(config.USER_ID, user_id)
  },
  
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  
  parseJwt(token){
    const payload=token.split('.')[1]
    return JSON.parse(atob(payload))
  }
}

export default TokenService