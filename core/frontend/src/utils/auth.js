import Cookies from 'js-cookie'
import Config from '@/settings'
import store from '@/store'
const TokenKey = Config.TokenKey
const TokenExpKey = Config.TokenExpKey

const IdTokenKey = Config.IdTokenKey

const AccessTokenKey = Config.AccessTokenKey

const casSessionKey = Config.CASSESSION

const linkTokenKey = Config.LinkTokenKey

export function getIdToken() {
  return Cookies.get(IdTokenKey)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setTokenExp(exp) {
  if (exp) {
    return Cookies.set(TokenExpKey, exp)
  }
  return null
}

export function tokenExp() {
  const exp = Cookies.get(TokenExpKey)
  if (exp && exp > 3000) {
    return new Date().getTime() > (exp - 3000)
  }
  return false
}

export function removeToken() {
  Cookies.remove(casSessionKey)
  Cookies.remove(IdTokenKey)
  Cookies.remove(AccessTokenKey)
  Cookies.remove(TokenExpKey)
  return Cookies.remove(TokenKey)
}

export function getLinkToken() {
  return Cookies.get(linkTokenKey)
}

export function setLinkToken(token) {
  return Cookies.set(linkTokenKey, token)
}

export function removeLinkToken() {
  return Cookies.remove(linkTokenKey)
}

export function setSysUI(uiInfo) {
  return Cookies.set('sysUiInfo', uiInfo ? JSON.stringify(uiInfo) : null)
}

export function getSysUI() {
  const json = Cookies.get('sysUiInfo')
  return json ? JSON.parse(json) : store.getters.uiInfo
}

export function getTimeOut() {
  const val = Cookies.get('request-time-out')
  return val
}

