(function() {

    function store(key, payload) {
        const items = get(key);
        items.push(payload);

        localStorage.setItem(key, JSON.stringify(items));
    }

    /**
     *
     * @param {string} key
     * @returns {array}
     */
    function get(key) {
        const data = localStorage.getItem(key);

        return data !== undefined && data !== null ? JSON.parse(data) : [];
    }

    function remove(key) {
        return localStorage.removeItem(key)
    }

    /**
     *
     * @param {string} key
     * @param {object} payload
     */
    function update(key, payload) {
        remove(key)
        store(key, payload)
    }

    window.DB = {
        store,
        get,
        remove,
        update,
    }
})();