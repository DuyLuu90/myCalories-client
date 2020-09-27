import config from '../config'

const AuthHelperService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: credentials,
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthHelperService