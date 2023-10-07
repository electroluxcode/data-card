"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheTime = exports.cache = void 0;
// https://github.com/isaacs/node-lru-cache
const LRU = require('lru-cache');
const cacheTime = process.env.CACHE_TIME || 100 * 60; // 100 min
exports.cacheTime = cacheTime;
const maxCacheItems = process.env.MAX_CACHE_ITEMS || 1024;
const options = {
    max: maxCacheItems,
    // how long to live in ms
    ttl: cacheTime * 1000,
    // return stale items before removing from cache?
    allowStale: true,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
};
const cache = new LRU(options);
exports.cache = cache;
