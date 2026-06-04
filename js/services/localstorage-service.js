export class LocalStorageService {
    save(key, payload) {
        payload.created_at =  new Date().toISOString()
        const items = this.get(key);
        items.push(payload);

        localStorage.setItem(key, JSON.stringify(items));
    }

    /**
     *
     * @param {string} key
     * @returns {array}
     */
    get(key) {
        const data = localStorage.getItem(key);

        return data !== undefined && data !== null ? JSON.parse(data) : [];
    }

    remove(key) {
        return localStorage.removeItem(key)
    }

    /**
     *
     * @param {string} key
     * @param {object} payload
     */
    update(key, payload) {
        this.remove(key)
        this.save(key, payload)
    }
}