// https://github.com/isaacs/node-lru-cache
const LRU = require('lru-cache');

const cacheTime = process.env.CACHE_TIME || 100 * 60; // 100 min
const maxCacheItems = process.env.MAX_CACHE_ITEMS || 1024;

const options = {
  max: maxCacheItems,
  // how long to live in ms
  ttl: (cacheTime as number) * 1000,
  // return stale items before removing from cache?
  allowStale: true,
  updateAgeOnGet: false,
  updateAgeOnHas: false,
};

const cache = new LRU(options);

export {
  cache,
  cacheTime,
};
