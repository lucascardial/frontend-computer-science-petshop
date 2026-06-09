function isStringValida(str) {
    return typeof str === 'string' && str.trim().length > 0;
}

function isNullOrEmpty(obj) {
    return obj === null || obj === undefined || obj.length;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const Helpers = {
    isStringValida,
    isNullOrEmpty,
    isValidEmail
}