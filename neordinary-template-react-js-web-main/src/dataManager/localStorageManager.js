/**
 * loginInfo
 * - jwt
 * - userName
 * @param loginInfo
 */
exports.saveLoginData = loginInfo => {
  window.localStorage.setItem(process.env.REACT_APP_LOGIN_INFO, JSON.stringify(loginInfo) ?? '')
}

exports.clearLoginData = () => {
  window.localStorage.removeItem(process.env.REACT_APP_LOGIN_INFO)
}

exports.getLoginInfoUserName = () => {
  const loginInfo = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO))
  return loginInfo?.userName ?? ''
}

exports.getLoginInfoJwt = () => {
  const loginInfo = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO))
  return loginInfo?.jwt ?? ''
}
