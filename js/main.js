function store(key, payload) {
    localStorage.setItem(key, payload);
}

function get(key) {
    return localStorage.getItem(key)
}

function remove(key) {
    return localStorage.removeItem(key)
}

function update(key, payload) {
    remove(key)
    store(key, payload)
}

