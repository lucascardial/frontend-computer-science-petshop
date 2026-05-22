function isStringValida(str) {
    return typeof str === 'string' && str.trim().length > 0;
}

export const Helpers = {
    isStringValida,
}