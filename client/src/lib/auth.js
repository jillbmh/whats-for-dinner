export const setToken = (tokenName, token) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = (tokenName) => {
  return localStorage.getItem(tokenName)
}

export const clearTokens = () => {
  localStorage.removeItem('access-token')
  localStorage.removeItem('refresh-token')
}

export const tokenIsValid = (tokenName) => {
  const token = getToken(tokenName)

  if (!token) return false

  const exp = JSON.parse(atob(token.split('.')[1])).exp
  const now = Date.now() / 1000

  if (exp > now) {
    return true
  }
}

