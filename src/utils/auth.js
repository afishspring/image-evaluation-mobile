import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken() {
    Cookies.set(TokenKey, token)
}

export function removeToken() {
    Cookies.remove(TokenKey)
}