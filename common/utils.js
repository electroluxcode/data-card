"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeHTML = exports.isEndsWithASCII = exports.desktopConfig = exports.mobileConfig = void 0;
const mobileConfig = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
    },
};
exports.mobileConfig = mobileConfig;
const desktopConfig = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    },
};
exports.desktopConfig = desktopConfig;
const isEndsWithASCII = (str) => {
    if (str.length === 0)
        return false;
    return str.charCodeAt(str.length - 1) <= 127;
};
exports.isEndsWithASCII = isEndsWithASCII;
const encodeHTML = (str) => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};
exports.encodeHTML = encodeHTML;
