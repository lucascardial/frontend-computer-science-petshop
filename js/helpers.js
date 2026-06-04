function isStringValida(str) {
    return typeof str === 'string' && str.trim().length > 0;
}

function isNullOrEmpty(obj) {
    return obj === null || obj === undefined || !obj.count();
}

export const Helpers = {
    isStringValida,
    isNullOrEmpty,
}