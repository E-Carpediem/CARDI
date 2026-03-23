const $ = (selector) => document.querySelector(selector)

const commu = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

const currentCommunity = commu.getLocalStorage('currentCommunity');

